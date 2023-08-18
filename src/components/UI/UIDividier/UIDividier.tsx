import { Dispatch } from 'react';

import cn from 'classnames';

import styles from './UIDividier.module.css';

interface IProps {
    text: string,
    ind: number,
    tab: Number,
    setTab: Dispatch<React.SetStateAction<Number>>,
}

const UIDividier = ({tab, setTab, text, ind}: IProps) => {
  const isActive = ( ind: number ) => {
    return ind === tab? styles.active : '';
  };

  return (
    <li className={cn(styles.item, isActive(ind))} onClick={() => setTab(ind)}>
      {text}
    </li>
  );
};

export default UIDividier;