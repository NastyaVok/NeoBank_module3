import { useState, forwardRef, ReactNode } from 'react';

import UITabs from '../../../components/UI/UITabs';
import { getLocalStorage } from '../../../utils/localStore';

import Prescoring from './Prescoring';
import LoanOffer from './LoanOffer';
import Email from './Email';
import styles from './LoanForm.module.css';

interface IProps {
  props?: ReactNode,
}

const LoanForm = forwardRef<HTMLElement, IProps>((props, ref) => {
  const [tab, setTab] = useState<Number>(getLocalStorage('PrescoringStep').PrescoringStep); 
  
  return (
    <section className={styles.Loan} ref={ref}>
      <UITabs 
        ind={0}
        tab={tab}
        component={<Prescoring tab={tab} setTab={setTab}/>}
      />
      <UITabs 
        ind={1}
        tab={tab}
        component={<LoanOffer tab={tab} setTab={setTab}/>}
      />
      <UITabs 
        ind={2}
        tab={tab}
        component={<Email tab={tab} />}
      />
    </section>
  );
});

export default LoanForm;