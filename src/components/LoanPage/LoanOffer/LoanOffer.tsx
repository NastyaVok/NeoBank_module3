import { Dispatch, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../../hooks/useStore';
import { postApiResource } from '../../../utils/network';

import UIButton from '../../UI/UIButton';
import OfferItem from '../OfferItem';
import { API_URL_POSTAPPLY } from '../../../constants/api';
import UILoader from '../../UI/UILoader/UILoader';

import styles from './LoanOffer.module.css';

interface IProps {
  setTab: Dispatch<React.SetStateAction<Number>>,
}

const LoanOffer = observer(({setTab}: IProps) => {
  const [loader, setLoader] = useState<boolean>(false);
  const {
    rootStore: { applicationArray },
  } = useStore();

  const postClick = (ind: number) => {
    const offer = applicationArray.getApplicationArray[ind]; //test
 
    const getResource = async (url: string, data: {}) => {
      const res = await postApiResource(url, data);
      if (res) {
        return res[1] ? setTab(2) : false;
      }
    }; 
    setLoader(true);
    const timer =  setTimeout(() => getResource(API_URL_POSTAPPLY, offer), 1000);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <>
      {loader 
        ?
        <UILoader />
        :
        <div className={styles.wrapper}>
          {applicationArray && applicationArray.getApplicationArray.map(({
            requestedAmount,
            totalAmount,
            term,
            monthlyPayment,
            rate,
            isInsuranceEnabled,
            isSalaryClient,
          }, key) => {
            return (
              <div key={key} className={styles.item}>
                {<OfferItem
                  requestedAmount={requestedAmount}
                  totalAmount={totalAmount}
                  term={term}
                  monthlyPayment={monthlyPayment}
                  rate={rate}
                  isInsuranceEnabled={isInsuranceEnabled}
                  isSalaryClient={isSalaryClient}
                />}
                {
                  <div className={styles.btn}>
                    <UIButton
                      text={'Select'}
                      classes={styles.width}
                      onClick={() => postClick(key)}
                    />
                  </div>
                }
              </div>
            );
          })}
        </div>
      }
    </>
  );
});

export default LoanOffer;