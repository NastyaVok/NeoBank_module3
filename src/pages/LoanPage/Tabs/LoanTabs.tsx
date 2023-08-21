import { useState } from 'react';

import UIDividier from '../../../components/UI/UIDividier';
import UITabs from '../../../components/UI/UITabs';

import AboutCard from './Card';
import Cashback from './Cashback';
import Rates from './Rates';
import FAQ from './FAQ';

import { DATA_DIVIDERS } from './data';

import styles from './LoanTabs.module.css';

const LoanTabs = () => {
  const [tab, setTab] = useState<Number>(0);

  return (
    <section className={styles.About}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {DATA_DIVIDERS.map(({title}, ind) => {
            return(
              <UIDividier 
                key={ind}
                text={title}
                tab={tab}
                setTab={setTab}
                ind={ind}
              />
            );
          })}
        </ul>
        <span className={styles.line}/>
      </div>
      <div className={styles.content}>
        <UITabs 
          ind={0}
          tab={tab}
          component={<AboutCard />}
        />
        <UITabs 
          ind={1}
          tab={tab}
          component={<Rates />}
        />
        <UITabs 
          ind={2}
          tab={tab}
          component={<Cashback />}
        />
        <UITabs 
          ind={3}
          tab={tab}
          component={<FAQ />}
        />
      </div>
    </section>
  );
};

export default LoanTabs;