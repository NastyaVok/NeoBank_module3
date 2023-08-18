import { useState } from 'react';

import cn from 'classnames';

import AboutCard from '../AboutCard';
import Cashback from '../Cashback';
import Rates from '../Rates';
import FAQ from '../FAQ';
import UIDividier from '../../UI/UIDividier';
import UITabs from '../../UI/UITabs';

import { DATA_DIVIDERS } from './Data';

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