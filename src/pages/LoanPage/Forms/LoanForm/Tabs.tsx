import { useState } from 'react';

import UITabs from '../../../../components/UI/UITabs';

import Prescoring from './Prescoring';
import LoanOffer from './LoanOffer';
import Email from './Email';

import styles from './Tabs.module.css';

const Tabs = () => {
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
        component={<Email />}
      />
    </>
  );
};

export default Tabs;