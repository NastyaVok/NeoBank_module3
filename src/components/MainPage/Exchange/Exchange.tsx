import { useState, useEffect } from 'react';

import { API_HOST_CURRENCY, API_KEY_CURRENCY, API_URL_CURRENCY } from '../../../constants/api';
import { currencies } from '../../../constants/constants';
import { getDataAllSettled } from '../../../utils/network';
import { getCurrenciesArray } from '../../../utils/getCurrenciesArray';
import { getUrls } from '../../../utils/getUrls';
import UILoader from '../../UI/UILoader';

import building from './img/building.png';

import styles from './Exchange.module.css';

const Exchange = () => {
  const [currenciesValue, setCurrenciesValue] = useState<{}[][]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const urls = getUrls(currencies, API_URL_CURRENCY);

  const options = {
    headers: {
      'X-RapidAPI-Key': API_KEY_CURRENCY,
      'X-RapidAPI-Host': API_HOST_CURRENCY,
    },
  };

  const getResource = async(urls:string[], options:{}) => {
    const res = await getDataAllSettled(urls, options);

    if (res) {
      setCurrenciesValue(getCurrenciesArray(currencies, res));
      setLoader(false);
    }
  };

  useEffect(() => {
    getResource(urls, options);
    const timer =  setTimeout(() => getResource(urls, options), 900000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {loader 
        ? 
        <UILoader /> 
        :
        <section className={styles.exchange}>
          <div className={styles.container}>
            <div className={styles.inner}>
              <div className={styles.head}>
                <h2 className={styles.title}>
                            Exchange rate in internet bank
                </h2>
                <p className={styles.subtitle}>
                            Update every 15 minutes, MSC 09.08.2022
                </p>
              </div>
              <div className={styles.column}>
                <h3 className={styles.header}>
                            Currency
                </h3>
                <div className={styles.content}>
                  <div className={styles.table}>
                    {currenciesValue 
                                    && 
                                    currenciesValue.map((currencies, id)=> {
                                      return (
                                        <ul className={styles.list} key={id}>
                                          {currencies.map((currency, id)=> {
                                            return (
                                              <li className={styles.item} key={id}>
                                                <h4 className={styles.currency}>{Object.keys(currency)}:</h4>
                                                <p className={styles.text}>{Object.values(currency)}</p>
                                              </li>
                                            );
                                          })}
                                        </ul>   
                                      );
                                    })
                    }
                  </div>
                  <img className={styles.img} src={building} alt="building-img"/>
                </div>
              </div>
              <p className={styles.courses}>
                        All courses
              </p>
            </div>
          </div>
        </section>
      }
       
    </>
  );
};

export default Exchange;