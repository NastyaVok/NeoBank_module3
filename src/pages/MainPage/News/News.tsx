import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import cn from 'classnames';

import { getApiResource } from '../../../utils/network';
import { isImgURLValid } from '../../../utils/validateImg';
import { API_KEY_NEWS, API_URL_NEWS } from '../../../constants/api';
import { INews } from '../../../types/interface';
import UILoader from '../../../components/UI/UILoader';

import 'swiper/css';

import styles from './News.module.css';

const News = () => {
  const buttonPrev = styles.button__prev;
  const buttonNext = styles.button__next;
  const [newsValue, setNewsValue] = useState<INews[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const options = {
    headers: {
      'X-Api-Key': API_KEY_NEWS,
    },
  };

  const getResourse = async(url:string, options:{}) => {
    const res = await getApiResource(url, options);

    if (res) {
      const arr: INews[] = res[0].articles;
      const newsList = arr.filter((
        {
          urlToImage,
          title,
          description,
          url,
        }) => {
        const imgValid = urlToImage !== null ? isImgURLValid(urlToImage) : false;

        if(imgValid && description) { 
          return { 
            urlToImage,
            title,
            description,
            url,
          };
        } 
      });
      setNewsValue(newsList);
      setLoader(false);
    }
  };

  useEffect(() => {
    getResourse(API_URL_NEWS, options);
  }, []);

  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <h2 className={styles.title}>
                        Current news from the world of finance
            </h2>
            <p className={styles.subtitle}>
                        We update the news feed every 15 minutes. 
                        You can learn more by clicking on the news 
                        you are interested in.
            </p>
          </div>
          {loader 
            ? 
            <UILoader />
            :   
            <div className={styles.slider__container}>
              <Swiper 
                className={styles.swiper__container}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1.2}
                navigation={{
                  nextEl: '.next',
                  prevEl: '.back',
                }}
                breakpoints={{
                  500: {
                    slidesPerView: 1.3,
                    spaceBetween: 40,
                  },
                  600: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                  },
                  800: {
                    slidesPerView: 2.3,
                    spaceBetween: 40,
                  },
                  900: {
                    slidesPerView: 3.4,
                    spaceBetween: 40,
                  },
                  1300: {
                    slidesPerView: 3.4,
                    spaceBetween: 80,
                  },
                }}
              >
                <div className={styles.wrapper}>
                  {newsValue && newsValue.map(({
                    urlToImage,
                    title,
                    description,
                    url,
                  }) => {
                    return (
                      <SwiperSlide className={styles.swiper__slide} key={title}>
                        <div className={styles.img__container}>
                          <img className={styles.img} src={urlToImage} alt="img" />
                        </div>
                        <h4 className={styles.slider__title}>
                          <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                          </a>
                        </h4>
                        <p className={styles.slider__text}>
                          {description}
                        </p>
                      </SwiperSlide>
                    );
                  })  
                  }
                        
                </div>
              </Swiper>
              <div className={styles.buttons}>
                <button 
                  className={cn(buttonPrev,'back')}>
                </button>
                <button 
                  className={cn(buttonNext,'next')}>
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default News;