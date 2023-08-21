import { useState, Dispatch } from 'react';
import { observer } from 'mobx-react-lite';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import UILabel from '../../../../../components/UI/UILabel';
import UIInput from '../../../../../components/UI/UIInput';
import UISelect from '../../../../../components/UI/UISelect';
import UIButton from '../../../../../components/UI/UIButton';
import UILoader from '../../../../../components/UI/UILoader';
import UIRange from '../../../../../components/UI/UIRange';


import { PrescoringForm } from '../../../../../types/interface';
import { API_URL_POSTCREATE } from '../../../../../constants/api';
import { transformData } from '../../../../../utils/getBirthdate';
import { capitalFirstLetter } from '../../../../../utils/getValidName';

import { useStore } from '../../../../../utils/hooks/useStore';

import { schemaInitialStep } from './schema/schema';

import { DATA_NAMES, DATA_SOCIALS } from './data';

import styles from './Prescoring.module.css';

interface IProps {
    setTab: Dispatch<React.SetStateAction<Number>>,
}

const Prescoring = observer(({setTab}: IProps) => {
  const {
    rootStore: { applicationArray },
  } = useStore();

  const [loader, setLoader] = useState<boolean>(false);
  const [amountValue, setAmountValue] = useState<string>('15000');
    
  const methods = useForm<PrescoringForm>({
    resolver: yupResolver(schemaInitialStep),
  });
      
  const onSubmit: SubmitHandler<PrescoringForm> = (
    {
      amount, 
      lastName, 
      firstName, 
      middleName, 
      term, 
      email, 
      birthdate, 
      passportSeries, 
      passportNumber,
    },
  ) => {
    const data = {
      amount,
      term,
      firstName: capitalFirstLetter(firstName),
      lastName: capitalFirstLetter(lastName),
      middleName: middleName ? capitalFirstLetter(middleName) : null,
      email,
      birthdate: transformData(new Date(birthdate)),
      passportSeries,
      passportNumber,
    };
    const getResource = async (url: string, data: {}) => {;
      await applicationArray.fetchApplicationArray(url, data);
      setTab(1);
    }; 
    setLoader(true);
    const timer =  setTimeout(() => getResource(API_URL_POSTCREATE, data), 1000);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <>
      {loader 
        ?
        <UILoader />
        :
        <section className={styles.Initial}>
          <div className={styles.wrapper} id="form">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={styles.container}>
                  <div className={styles.amount}> 
                    <div className={styles.header}> 
                      <h2 className={styles.title}>
                            Customize your card
                      </h2>
                      <p className={styles.steps}>
                            Step 1 of 5
                      </p>
                    </div>
                    <div className={styles.range}>
                      <UIRange 
                        title={'Select amount'}
                        name={'amount'}
                        value={amountValue}
                        setValue={setAmountValue}
                        min={15000}
                        max={600000} 
                      />  
                    </div>
                  </div>
                  <div className={styles.column}>
                    <h4 className={styles.text}>
                        You have chosen the amount
                    </h4>
                    <span className={styles.number}>
                      {Number(amountValue).toLocaleString()} ₽
                    </span>
                  </div>
                </div>
                <div className={styles.inputs}>
                  <h4 className={styles.subtitle}>
                    Contact Information
                  </h4>
                  <div className={styles.list}>
                    {DATA_NAMES.map(({name, text, placeholder, required}) => {
                      return(
                        <div className={styles.item} key={name}>
                          {<UILabel
                            name={name}
                            text={text}
                            required={required}
                          />}
                          {<UIInput
                            name={name}
                            placeholder={placeholder}
                            required={required}
                          />
                          }
                        </div>
                      );
                    })}
                    <div className={styles.item}>
                      <UILabel 
                        name="term" 
                        text="Select term"
                      />
                      <UISelect 
                        name="term"
                        initial={6}
                        options={[
                          {title:'6 month',el:'6'},
                          {title:'12 month',el:'12'},
                          {title:'18 month',el:'18'},
                          {title:'24 month',el:'24'},
                        ]}
                      /> 
                    </div>  
                  </div>
                  <div className={styles.list}>
                    {DATA_SOCIALS.map(({name, text, placeholder}) => {
                      return(
                        <div className={styles.item} key={name}>
                          {<UILabel
                            name={name}
                            text={text}
                          />}
                          {<UIInput
                            name={name}
                            placeholder={placeholder}
                          />
                          }
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.btn}>
                  <UIButton 
                    text="Continue"   
                  />
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      }
    </>
       
  );
});

export default Prescoring;