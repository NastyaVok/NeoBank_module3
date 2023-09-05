import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import UIButton from '../../components/UI/UIButton';

import styles from './HeaderPage.module.css';

const HeaderPage = () => {
  const location = useLocation();
  const [linkTo, setLinkTo] = useState(location.pathname);
  const active = linkTo.includes('/loan') ? '0' : '';
  const [activeClass, setActiveClass] = useState(active);

  useEffect(() => {
    if(location.pathname === '/') {
      setActiveClass('');
      setLinkTo('/loan');
    } else {
      setLinkTo(location.pathname);
      setActiveClass('0');
    }
  }, [location]);

  const isActiveClass = (ind: string) => {
    return ind === activeClass? styles.activeClass : '';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.header}>NeoBank</h2>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <NavLink to={linkTo} 
              className={cn(styles.item, isActiveClass('0'))} 
            >
              Credit card
            </NavLink>
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