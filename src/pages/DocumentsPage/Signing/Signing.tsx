import { useState, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import UILoader from '../../../components/UI/UILoader';
import { useStore } from '../../../utils/hooks/useStore';
import UICheckbox from '../../../components/UI/UICheckbox';
import UIButton from '../../../components/UI/UIButton';
import { API_URL_POSTDOCUMENT, SIGN } from '../../../constants/api';
import { postApiResource } from '../../../utils/network';

import download from './files/credit-card-offer.pdf';
import file from './img/file.svg';

import styles from './Signing.module.css';

interface IProps {
    setSuccess: Dispatch<React.SetStateAction<boolean>>,
}

const Signing = observer(({setSuccess}: IProps) => {
  const {
    rootStore: { applicationId },
  } = useStore();

  const [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(false);

  const isBtnActive = async(isActive: boolean) => {
    if(isActive) {
      const getResource = async (url: string, data: {}) => {
        const res = await postApiResource(url, data);

        if (res) {
          if(res[1] === 200) {
            setLoader(false);
            setSuccess(true);
          }
        }
      }; 
      setLoader(true);
      const timer =  setTimeout(() => 
        getResource(API_URL_POSTDOCUMENT + '/' + applicationId.getApplicationId + SIGN, {}), 1000);
      return () => {
        clearTimeout(timer);
      };
    };
  };

  return (
    <>
      {loader 
        ?
        <UILoader />
        :
        <div className={styles.wrapper}>
          <div className={styles.header}> 
            <h2 className={styles.title}>
        Signing of documents
            </h2>
            <p className={styles.steps}>
                        Step 4 of 5
            </p>
          </div>
          <p className={styles.text}>
        Information on interest rates under bank deposit agreements with individuals. 
        Center for Corporate Information Disclosure. Information of
        a professional participant in the securities market. 
        Information about persons under whose control or significant influence the Partner
        Banks are. 
        By leaving an application, you agree to the processing of personal data, 
        obtaining information, obtaining access to a credit history, using an analogue 
        of a handwritten signature, an offer, a policy regarding the processing 
        of personal data, a form of consent to the processing of personal data.
          </p>
          <div className={styles.file}>
            <Link to={download} target="_blank" download>
              <img className={styles.img} src={file} alt={file}></img>
            </Link>
            <Link to={download} target="_blank" download>
              <p className={styles.link}>Information on your card</p>
            </Link>
          </div>
          <div className={styles.submit}>
            <div className={styles.checkbox}>
              <UICheckbox
                id={'checkbox'}
                name={'checkbox'}
                text={'I agree'}
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>
            <div className={styles.send}>
              <UIButton
                text={'Send'}
                classes={styles.btn}
                disabled={!checked}
                onClick={() => isBtnActive(checked)}
              />
            </div>
          </div>
        </div>
      }
    </>
    
  );
});

export default Signing;