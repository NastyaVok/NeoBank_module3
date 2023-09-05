import { useState, useEffect, Dispatch } from 'react';
import { observer } from 'mobx-react-lite';

import UILoader from '../../../components/UI/UILoader';
import { useStore } from '../../../utils/hooks/useStore';
import UITable from '../../../components/UI/UITable';
import UICheckbox from '../../../components/UI/UICheckbox';
import UIButton from '../../../components/UI/UIButton/UIButton';
import { Sort } from '../../../types/interface';
import { sortData } from '../../../utils/sortData';
import ModalPage from '../Modal/ModalPage';
import { API_URL_POSTDOCUMENT } from '../../../constants/api';
import { postApiResource } from '../../../utils/network';

import { DATA_TITLES } from './data';
import styles from './Schedule.module.css';

interface IProps {
  setSuccess: Dispatch<React.SetStateAction<boolean>>
}

const Schedule = observer(({setSuccess}: IProps) => {
  const {
    rootStore: { applicationId, paymentArray },
  } = useStore();

  const [loader, setLoader] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [checked, setChecked] = useState(false);
  const [sortedColumn, setSortedColumn] = useState('');
  const [values, setValues] = useState<(string | number)[][]>([]);
  
  useEffect(() => {
    const fieldName: Sort = Sort[sortedColumn as keyof typeof Sort];
    paymentSchedule.sort(sortData(fieldName));
    setValues(paymentSchedule.map((value)=> Object.values(value)));
  }, [sortedColumn]);

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
        getResource(API_URL_POSTDOCUMENT + '/' + applicationId.getApplicationId, {}), 1000);
      return () => {
        clearTimeout(timer);
      };
    };
  };

  const denyPayment = () => {
    setModalActive(true);
  };

  const paymentSchedule = paymentArray.getPaymentArray;

  return (
    <>{
      loader 
        ?
        <UILoader />
        :
        <div className={styles.wrapper}> 
          <div className={styles.header}> 
            <h2 className={styles.title}>
                        Continuation of the application
            </h2>
            <p className={styles.steps}>
                        Step 3 of 5
            </p>
          </div>
          <div className={styles.table}>
            <UITable
              title={DATA_TITLES}
              content={values}
              sortedColumn={sortedColumn}
              setSortedColumn={setSortedColumn}
            />
          </div>
          <div className={styles.btns}>
            <UIButton
              text={'Deny'}
              classes={styles.deny}
              onClick={() => denyPayment()}
            />
            <div className={styles.accepted}>
              <div className={styles.input}>
                <UICheckbox
                  id={'checkbox'}
                  name={'checkbox'}
                  text={'I agree with the payment schedule'}
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  classes={styles.checkbox}
                />
              </div>
              <div className={styles.btn}>
                <UIButton
                  text={'Send'}
                  classes={styles.send}
                  disabled={!checked}
                  onClick={() => isBtnActive(checked)}
                />  
              </div>   
            </div>
          </div>
          <ModalPage active={modalActive} setActive={setModalActive}/>
        </div>
    }
    </>
  );
});

export default Schedule;