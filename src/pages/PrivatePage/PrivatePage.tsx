import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../utils/hooks/useStore';
import { getApplicationId } from '../../utils/getApplicationId';
import { statuses } from '../../utils/getState';
import privateRoutesConfig from '../../routes/privateRoutesConfig';
import { getLocalStorage } from '../../utils/localStore';
import { getApiResource } from '../../utils/network';
import { API_URL_GETAPPLICATION } from '../../constants/api';
import InvalidCredentials from '../../components/shared/InvalidCredentials';
import UILoader from '../../components/UI/UILoader';

import styles from './PrivatePage.module.css';

const PrivatePage = observer(() => {
  const {
    rootStore: { stepStore, applicationId, paymentArray, sesCode },
  } = useStore();

  const [loader, setLoader] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);

  const location = useLocation();
  applicationId.setApplicationId(getApplicationId(location.pathname));
  const state = getLocalStorage('IsScoringOpen').IsScoringOpen.includes(applicationId.getApplicationId);
  const {initial, finish} = statuses(location.pathname, applicationId.getApplicationId);
 
  const getResource = async(url:string) => {
    const res = await getApiResource(url);
    if (res) {   
      const status = res[0].statusHistory;
      const code = res[0].sesCode;
      const arr: string[] = [];
      paymentArray.setPaymentArray(res[0].credit?.paymentSchedule);
      sesCode.setSesCode(res[0]?.sesCode);
    
      for (let i = 0; i < status.length; i++) {
        const value = status[i].status;
        const codeCondition = (initial === 'code' || finish === 'code') && code !== null;
        
        if (value === finish) {
          stepStore.setStepStore(true);
          arr.push('CC_APPROVED');
        } else if (value === initial) {
          arr.push('APPROVED');
        } else if (codeCondition) {
          if(finish === 'code') {
            stepStore.setStepStore(true);
          }
          arr.push('code');
        }
      }
      setLoader(false);
      return arr.length;
    }
    setLoader(false);
    return false;
  };

  useEffect(()=>{
    const getHistoryStatus = getResource(API_URL_GETAPPLICATION + '/' + applicationId.getApplicationId);
    setIsAccepted(state && getHistoryStatus);
  }, []);

  return (
    <>
      {loader
        ?
        <UILoader/>
        :
        <>
          {isAccepted 
            ?
            <>
              <Routes>
                {privateRoutesConfig.map((route, index) => (
                  <Route 
                    key={index}
                    path={route.path} 
                    element={route.element} 
                  />
                ))}
              </Routes>
            </>
            :
            <>
              <InvalidCredentials />
            </>
          }
        </>
      }
    </>
  );
});

export default PrivatePage;