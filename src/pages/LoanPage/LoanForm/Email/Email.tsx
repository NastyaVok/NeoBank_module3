import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { setLocalStorage, getLocalStorage } from '../../../../utils/localStore';
import { useStore } from '../../../../utils/hooks/useStore';

import styles from './Email.module.css';

interface IProps {
  tab: Number,
}
const Email = observer(({tab}: IProps) => {

  const {
    rootStore: { buttonText },
  } = useStore();

  useEffect(() => {
    if ( tab === 2 ) {
      buttonText.setbuttonText('Continue registration');
    }
  }, [tab]);

  const condition = getLocalStorage('PrescoringStep').PrescoringStep === 2;

  if (condition) {
    const getScoring = getLocalStorage('IsScoringOpen').IsScoringOpen;

    const idArray = getScoring !== undefined ? getScoring : [];
    const newArray = new Set([...idArray, getLocalStorage('currentId').currentId]);
    setLocalStorage('IsScoringOpen', {IsScoringOpen: Array.from(newArray)});
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        The preliminary decision has been sent to your email.
      </h2>
      <p className={styles.text}>
        In the letter you can get acquainted with the preliminary decision on the credit card.
      </p>
    </div>
  );
});

export default Email;