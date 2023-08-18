import { useState } from 'react';

import Prescoring from '../Prescoring';
import LoanOffer from '../LoanOffer';
import EmailSuccess from '../EmailSuccess';
import UITabs from '../../UI/UITabs';

import styles from './Initial.module.css';

const Initial = () => {
  const [tab, setTab] = useState<Number>(0); 
    
  return (
    <>
      <UITabs 
        ind={0}
        tab={tab}
        component={<Prescoring setTab={setTab}/>}
      />
      <UITabs 
        ind={1}
        tab={tab}
        component={<LoanOffer setTab={setTab}/>}
      />
      <UITabs 
        ind={2}
        tab={tab}
        component={<EmailSuccess />}
      />
    </>
  );
};

export default Initial;