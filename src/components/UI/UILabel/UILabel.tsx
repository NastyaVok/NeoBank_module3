import cn from 'classnames';

import styles from './UILabel.module.css';

interface Iprops {
    name: string,
    text: string,
    classes?: string,
    required?: boolean,
}

const UILabel = ({ name, text, classes, required = true }: Iprops) => {
    
  return (
    <>
      <label 
        htmlFor={name} 
        className={cn(styles.label, classes)}
      >
        <span className={styles.text}>{text}</span>
        {required && <span className={styles.required}> *</span>}
      </label>
    </>
  );
};

export default UILabel;