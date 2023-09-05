import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../utils/hooks/useStore';

import Schedule from './Shedule';
import Mail from './Mail';
import styles from './SchedulePage.module.css';

const SchedulePage = observer(() => {
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
          <Schedule setSuccess={setSuccess}/>
      }
    </div>
  );
});

export default SchedulePage;