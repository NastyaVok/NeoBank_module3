import { useState, FormEvent } from 'react';

import { getLocalStorage, setLocalStorage } from '../../../utils/localStore';
import { postApiResource } from '../../../utils/network';

import { API_URL_POSTEMAIL } from '../../../constants/api';

import email from './img/email.svg';
import telegram from './img/telegram.png';

import styles from './Support.module.css';


const Support = () => {
  const [emailValue, setEmailValue] = useState('');
  const [newsletter, setNewsletter] = useState(getLocalStorage('sendEmail'));
  const newsletterText = 'You are already subscribed to the bank\'s newsletter';

  const subscribeToNews = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postResource(API_URL_POSTEMAIL, emailValue);
  };

  const postResource = async (url: string, email: string) => {
    const data = {
      email,
    };

    const res = await postApiResource(url, data);
    const status = res ? res[1] : 'noData';
        
    if (status === 200 ) { 
      setLocalStorage('sendEmail',newsletterText);
      setNewsletter(newsletterText);
    }
  };

  return (
    <section className={styles.support}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
                        Support
          </h2>
          <p className={styles.subtitle}>
                        Subscribe Newsletter & get
          </p>
          <p className={styles.text}>
                        Bank News
          </p>
          {
            newsletter 
              ? 
              <h2 className={styles.newsletter}>
                {newsletter}
              </h2> 
              :
              <form onSubmit={(e) => subscribeToNews(e)}>
                <div className={styles.form}>
                  <img className={styles.input__img} src={email} alt="telegram-img"/>
                  <input 
                    className={styles.input} 
                    placeholder="Your email" 
                    type="email" 
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    required
                  /> 
                  <button className={styles.btn}>
                    <div className={styles.btn__container}>
                      <img className={styles.btn__img} src={telegram} alt="telegram-img"/>
                      <span className={styles.btn__text}>Subscribe</span>
                    </div>
                  </button>
                </div>
              </form>
          }
        </div>
      </div>
    </section>
  );
};

export default Support;