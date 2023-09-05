import { ChangeEventHandler } from 'react';

import cn from 'classnames';

import styles from './UICheckbox.module.css';

interface IProps {
    id: string,
    name: string,
    text: string,
    checked: boolean,
    classes?: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
}

const UICheckbox = ({id, name, text, checked, classes, onChange}: IProps) => {

  return (
    <div className={cn(styles.wrapper, classes)}>
      <input  
        className={styles.input}
        type="checkbox" 
        id={id} 
        name={name}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label  
        className={styles.label}
        htmlFor={name}
      >
        {text}
      </label>
    </div>
  );
};

export default UICheckbox;