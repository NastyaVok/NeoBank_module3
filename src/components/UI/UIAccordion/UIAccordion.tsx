import { Dispatch, MouseEvent } from 'react';

import styles from './UIAccordion.module.css';

interface IProps {
    title: string,
    text: string,
    ind: number,
    tab: number|undefined,
    setTab: Dispatch<React.SetStateAction<number|undefined>>,
}

const UIAccordion = ({ title, text, ind, tab, setTab }: IProps) => {

  const isOpen = (ind: number, e: MouseEvent) => {
    e.preventDefault();
    setTab(ind);
    if(tab === ind) {
      setTab(undefined);
    }
  };

  return (
    <details className={styles.item} open={tab === ind} onClick={(e) => isOpen(ind, e)}>
      <summary className={styles.subtitle}>
        {title}
      </summary>
      <p className={styles.text}>
        {text}
      </p>
    </details>
  );
};

export default UIAccordion;