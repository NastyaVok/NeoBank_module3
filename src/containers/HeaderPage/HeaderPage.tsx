import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import UIButton from '../../components/UI/UIButton';

import styles from './HeaderPage.module.css';

const HeaderPage = () => {
  const [activeClass, setActiveClass] = useState<string>('');

  const isActiveClass = (ind: string) => {
    return ind === activeClass? styles.activeClass : '';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.header}>NeoBank</h2>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <Link to={'/loan'} 
              className={cn(styles.item, isActiveClass('0'))} 
              onClick={() => setActiveClass('0')}
            >
              Credit card
            </Link>
            <li className={cn(styles.item, isActiveClass('1'))}>Product</li>
            <li className={cn(styles.item, isActiveClass('2'))}>Account</li>
            <li className={cn(styles.item, isActiveClass('3'))}>Resources</li>
          </ul>
        </nav>
        <UIButton text="Online Bank" />
      </div>
    </div>
  );
};

export default HeaderPage;