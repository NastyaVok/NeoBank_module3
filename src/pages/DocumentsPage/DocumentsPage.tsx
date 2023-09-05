import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../utils/hooks/useStore';

import Signing from './Signing';
import Mail from './Mail';

import styles from './DocumentsPage.module.css';

const DocumentsPage = observer(() => {
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
          <Signing setSuccess={setSuccess}/>
      }
    </div>
  );
});

export default DocumentsPage;