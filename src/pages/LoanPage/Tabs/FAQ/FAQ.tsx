import { useState } from 'react';

import UIAccordion from '../../../../components/UI/UIAccordion';

import { ACCORDION_DATA_RECEIVING, ACCORDION_DATA_USING } from './data';

import styles from './FAQ.module.css';

const FAQ = () => {
  const [tabReceiving, setTabReceiving] = useState<number|undefined>(undefined);
  const [tabUsing, setTabUsing] = useState<number|undefined>(undefined);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h2 className={styles.title}>
                    Issuing and receiving a card
        </h2>
        {ACCORDION_DATA_RECEIVING.map(({title,text}, key) => {
          return (
            <UIAccordion 
              key={key}
              title={title}
              text={text}
              ind={key}
              tab={tabReceiving}
              setTab={setTabReceiving}
            />
          );
        })}
      </div>
      <div className={styles.block}>
        <h2 className={styles.title}>
                    Using a credit card
        </h2>
        {ACCORDION_DATA_USING.map(({title,text}, key) => {
          return (
            <UIAccordion 
              key={key}
              title={title}
              text={text}
              ind={key}
              tab={tabUsing}
              setTab={setTabUsing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;