import { Dispatch, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { postApiResource } from '../../../../utils/network';

import UIButton from '../../../../components/UI/UIButton';
import OfferItem from '../OfferItem';
import { API_URL_POSTAPPLY } from '../../../../constants/api';
import UILoader from '../../../../components/UI/UILoader';

import { setLocalStorage, getLocalStorage } from '../../../../utils/localStore';
import { IApplication } from '../../../../types/interface';
import { useStore } from '../../../../utils/hooks/useStore';

import { sortLoan } from './sortLoan';
import styles from './LoanOffer.module.css';

interface IProps {
  tab: Number,
  setTab: Dispatch<React.SetStateAction<Number>>,
}

const LoanOffer = observer(({tab, setTab}: IProps) => {
  
  const {
    rootStore: { buttonText },
  } = useStore();

  useEffect(() => {
    if ( tab === 1 ) {
      buttonText.setbuttonText('Choose an offer');
    }
  }, [tab]);

  const [loader, setLoader] = useState<boolean>(false);
  const offers: IApplication[] = getLocalStorage('loanOffers').loanOffers;
  const sortedOffers = sortLoan(offers);

  const postClick = (ind: number) => {
    const offer = offers[ind];
 
    const getResource = async (url: string, data: {}) => {
      const res = await postApiResource(url, data);
      if (res) {
        setLoader(false);
        setLocalStorage('PrescoringStep', {PrescoringStep: 2});
        return res[1] ? setTab(2) : false;
      }
    }; 
    setLoader(true);
    const timer =  setTimeout(() => getResource(API_URL_POSTAPPLY, offer), 1000);
    return () => {
      clearTimeout(timer);
    };
  };

  const goBack = async () => {
    setTab(0);
    setLocalStorage('PrescoringStep', {PrescoringStep: 0});
  };
  
  return (
    <>
      {loader 
        ?
        <UILoader />
        :
        <div className={styles.wrapper}>
          <div className={styles.backBtn}>
            <UIButton
              text={'Go Back'}
              onClick={() => goBack()}
              classes={styles.back}
            />
          </div>
          <div className={styles.container}>
            {sortedOffers && sortedOffers.map(({
              applicationId,
              requestedAmount,
              totalAmount,
              term,
              monthlyPayment,
              rate,
              isInsuranceEnabled,
              isSalaryClient,
            }, key) => {
              if(key === 0) {
                setLocalStorage('currentId', {'currentId': applicationId});
              }
              return (
                <div key={key} className={styles.above}>
                  <div className={styles.item}>
                    <OfferItem
                      applicationId={applicationId}
                      requestedAmount={requestedAmount}
                      totalAmount={totalAmount}
                      term={term}
                      monthlyPayment={monthlyPayment}
                      rate={rate}
                      isInsuranceEnabled={isInsuranceEnabled}
                      isSalaryClient={isSalaryClient}
                    />
                    <div className={styles.btn}>
                      <UIButton
                        text={'Select'}
                        classes={styles.width}
                        onClick={() => postClick(key)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    </>
  );
});
export default LoanOffer;