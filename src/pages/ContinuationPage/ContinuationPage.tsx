import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../utils/hooks/useStore';

import Scoring from './Scoring';
import Mail from './Mail';
import styles from './ContinuationPage.module.css';

const ContinuationPage = observer(() => {
  const {
    rootStore: { stepStore },
  } = useStore();

  const [success, setSuccess] = useState(stepStore.getStepStore);

  return (
    <div className={styles.wrapper}>
      {
        success
          ?
          <Mail />
          :
          <Scoring setSuccess={setSuccess}/>
      }
    </div>
  );
});

export default ContinuationPage;