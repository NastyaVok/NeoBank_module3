import { useRef } from 'react';

import Card from './Credit/Card';
import LoanTabs from './Tabs/LoanTabs';
import Steps from './Steps/Stepts';
import LoanForm from './LoanForm';
import styles from './LoanPage.module.css';

const LoanPage = () => {
  const resultRef = useRef<HTMLElement>(null);

  return (
    <div className={styles.wrapper}>
      <Card resultRef={resultRef} />
      <LoanTabs />
      <Steps />
      <LoanForm ref={resultRef} />
    </div>
  );
};

export default LoanPage;