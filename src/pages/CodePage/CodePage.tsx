import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../utils/hooks/useStore';

import Code from './Code';
import Finish from './Finish';

import styles from './CodePage.module.css';

const CodePage = observer(() => {
  const {
    rootStore: { stepStore },
  } = useStore();

  const [success, setSuccess] = useState(stepStore.getStepStore);

  return (
    <div className={styles.wrapper}>
      {
        success
          ?
          <Finish />
          :
          <Code setSuccess={setSuccess}/>
      }
    </div>
  );
});

export default CodePage;