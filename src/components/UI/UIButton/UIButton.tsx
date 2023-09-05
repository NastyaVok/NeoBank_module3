import { MouseEventHandler } from 'react';
import cn from 'classnames';

import styles from './UIButton.module.css';

interface Iprops {
    text: string,
    classes?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const UIButton = ({ text, classes, disabled = false, onClick }: Iprops) => {

  return (
    <button 
      className={cn(styles.btn, classes)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default UIButton;