import { useState, Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';

import { getLocalStorage, setLocalStorage } from '../../../utils/localStore';
import { API_URL_POSTCREATE, DENY } from '../../../constants/api';
import { postApiResource } from '../../../utils/network';
import { useStore } from '../../../utils/hooks/useStore';
import UIButton from '../../../components/UI/UIButton';

import cancelIcon from './img/cancel.png';
import styles from './ModalPage.module.css';

interface propsModal {
    active: boolean, 
    setActive: Dispatch<React.SetStateAction<boolean>>
}

const ModalPage = observer(({active, setActive}: propsModal) => {
  const {
    rootStore: { applicationId },
  } = useStore();

  const [deny, setDeny] = useState(false);

  const modalClass = styles.modal;
  const activeClass = styles.active;
  const modalContentClass = styles.modal__content;
  const activeContentClass = styles.active__content;

  const navigate = useNavigate();

  const goMainPage = () => {
    navigate('/');
  };

  const isModalActive = (modal: string, additional:string) => {
    return active ? cn(modal, additional) : modal;
  };

  const isDenyActive = () => {
    return deny ? goMainPage() : setActive(false);
  };

  const denyCredit = async () => {
    await postApiResource(API_URL_POSTCREATE + '/' + applicationId.getApplicationId + DENY);
    setDeny(true);

    const getScoring = getLocalStorage('IsScoringOpen').IsScoringOpen;
    const newArray = getScoring.filter((id:number) => id !== applicationId.getApplicationId);
    setLocalStorage('IsScoringOpen', {IsScoringOpen: newArray});
  };

  const isModal = () => {
    setActive(false);
    if (deny) {
      goMainPage();
    }
  };

  return (
    <div 
      className={isModalActive(modalClass, activeClass)} 
      onClick={() => isModal()}
    >
      <div 
        className={isModalActive(modalContentClass, activeContentClass)} 
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>
                                Deny application
            </h2>   
            <img 
              className={styles.img} 
              src={cancelIcon} 
              alt="cancel" 
              onClick={() => isDenyActive()}
            ></img>
          </div>
          <p className={styles.text}>
            {
              deny 
                ?
                'Your application has been deny!'
                :
                'You exactly sure, you want to cancel this application?'
            }
          </p>
        </div>
        <div className={styles.btns}>
          {
            deny 
              ?
              <UIButton
                text={'Go home'}
                classes={styles.home}
                onClick={() => goMainPage()}
              />
              :
              <>
                <UIButton
                  text={'Deny'}
                  classes={styles.deny}
                  onClick={() => denyCredit()}
                />
                <UIButton
                  text={'Cancel'}
                  classes={styles.cancel}
                  onClick={() => setActive(false)}
                />
              </>
          }
        </div>
      </div>
    </div>
  );
});

export default ModalPage;