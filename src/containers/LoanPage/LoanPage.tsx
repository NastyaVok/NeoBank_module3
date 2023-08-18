import CreaditCard from '../../components/LoanPage/CreditCard';
import LoanTabs from '../../components/LoanPage/LoanTabs';
import GetCard from '../../components/LoanPage/GetCard';
import CustomizeCard from '../../components/LoanPage/CustomizeCard';

import styles from './LoanPage.module.css';

const LoanPage = () => {

  return (
    <div className={styles.wrapper}>
      <CreaditCard />
      <LoanTabs />
      <GetCard />
      <CustomizeCard />
    </div>
  );
};

export default LoanPage;