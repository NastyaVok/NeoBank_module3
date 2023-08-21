import cn from 'classnames';

import { IApplication } from '../../../../../types/interface';

import box from './img/box.png';
import ok from './img/ok.png';
import not from './img/not.png';

import styles from './OfferItem.module.css';

const OfferItem = ({
  requestedAmount,
  totalAmount,
  term,
  monthlyPayment,
  rate,
  isInsuranceEnabled,
  isSalaryClient,
}: IApplication ) => {

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <img className={styles.img} src={box} alt={'box'}/>
      </li>
      <li className={styles.item}>
          Requested amount: {requestedAmount.toLocaleString()} ₽
      </li>
      <li className={styles.item}>
          Total amount: {totalAmount.toLocaleString()} ₽
      </li>
      <li className={styles.item}>
          For {term} months
      </li>
      <li className={styles.item}>
            Monthly payment: {Math.round(monthlyPayment).toLocaleString()} ₽
      </li>
      <li className={styles.item}>
            Your rate: {rate}%
      </li>
      <li className={cn(styles.item, styles.block)}>
        <p className={styles.text}>Insurance included</p>
        <img src={isInsuranceEnabled ? ok : not} className={styles.icon} alt={'ok'}/>
      </li>
      <li className={cn(styles.item, styles.block)}>
        <p className={styles.text}>Salary client</p>
        <img src={isSalaryClient ? ok : not} className={styles.icon} alt={'not'}/>
      </li>
    </ul>
  );
};

export default OfferItem;