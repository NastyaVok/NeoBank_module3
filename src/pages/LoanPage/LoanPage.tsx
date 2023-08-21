import Card from './Credit/Card';
import LoanTabs from './Tabs/LoanTabs';
import Steps from './Steps/Stepts';
import Tabs from './Forms/LoanForm/Tabs';

import styles from './LoanPage.module.css';

const LoanPage = () => {

  return (
    <div className={styles.wrapper}>
      <Card />
      <LoanTabs />
      <Steps />
      <Tabs/>
    </div>
  );
};

export default LoanPage;