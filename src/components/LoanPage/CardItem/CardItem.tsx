import { useState } from 'react';

import styles from './CardItem.module.css';

interface IProps {
    title: string,
    text: string,
    hiddenText: string
}

const CardItem = ({title, text, hiddenText}: IProps) => {
  const hidden = styles.hidden;
  const visible = styles.visible;
  const [hiddenClass, setHiddenClass] = useState(hidden);

  return (
    <li 
      className={styles.item} 
      onMouseEnter={() => setHiddenClass(visible)} 
      onMouseLeave={() => setHiddenClass(hidden)}
    >
      <h4 className={styles.title}>
        {title}
      </h4>
      <p  className={styles.text}>
        {text}
      </p>
      <div className={hiddenClass}>
        <p className={styles.hidden__text}>
          {hiddenText}
        </p>
      </div>
    </li>
  );
};

export default CardItem;