import { MouseEventHandler } from 'react';
import cn from 'classnames';

import styles from './UIButton.module.css';

interface Iprops {
    text: string,
    classes?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const UIButton = ({ text, classes, onClick }: Iprops) => {
  return (
    <button 
      className={cn(styles.btn, classes)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default UIButton;