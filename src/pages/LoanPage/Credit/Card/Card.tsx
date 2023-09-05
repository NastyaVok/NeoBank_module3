import { RefObject } from 'react';

import { observer } from 'mobx-react-lite';

import CardItem from '../CardItem';
import UIButton from '../../../../components/UI/UIButton';
import { useStore } from '../../../../utils/hooks/useStore';

import { DATA_ITEMS } from './data';
import card from './img/card.png';

import styles from './Card.module.css';

interface IProps {
  resultRef: RefObject<HTMLElement>,
}

const Card = observer(({ resultRef }: IProps) => {
  const {
    rootStore: { buttonText },
  } = useStore();

  const onClick = () => {
    resultRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };

  return (
    <section className={styles.CreaditCard}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
                        Platinum digital credit card
          </h2>
          <div className={styles.text}>
            <p>Our best credit card. Suitable for everyday spending and shopping.</p><br />
            <p>Cash withdrawals and transfers without commission and interest.</p>
          </div>
          <ul className={styles.list}>
            {DATA_ITEMS.map(({title, text, hiddenText}, key) => {
              return(
                <CardItem 
                  key={key}
                  title={title}
                  text={text}
                  hiddenText={hiddenText}
                />
              );
            })}
          </ul>
          <div className={styles.btn}> 
            <UIButton 
              text={buttonText.getButtonText}
              onClick={() => onClick()}
            />
          </div>
        </div>
        <div className={styles.img__container}>
          <img  className={styles.img} src={card} alt="card-img" />
        </div>
      </div>
    </section>
  );
});

export default Card;