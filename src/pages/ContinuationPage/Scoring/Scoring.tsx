import { useState, Dispatch } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { getLocalStorage, setLocalStorage } from '../../../utils/localStore';
import { useStore } from '../../../utils/hooks/useStore';
import { putApiResource, getApiResource } from '../../../utils/network';
import { API_URL_PUTREGISTRATION, API_URL_GETAPPLICATION } from '../../../constants/api';
import { transformDate } from '../../../utils/getValidDate';
import { setHyphen } from '../../../utils/setHyphen';
import UILabel from '../../../components/UI/UILabel';
import UIInput from '../../../components/UI/UIInput';
import UISelect from '../../../components/UI/UISelect';
import UIButton from '../../../components/UI/UIButton';
import UILoader from '../../../components/UI/UILoader';
import { IScoring, StatusEmployment, Position } from '../../../types/interface';

import { schemaScoringStep } from './schema/schema';
import { DATA_STATUS, DATA_CODE, DATA_EMPLOYMENT, DATA_EXPERIENCE } from './data';
import styles from './Scoring.module.css';

interface IProps {
    setSuccess: Dispatch<React.SetStateAction<boolean>>,
}

const Scoring = observer(({setSuccess}: IProps) => {
  const {
    rootStore: { applicationId },
  } = useStore();
  const navigate = useNavigate();

  const [loader, setLoader] = useState<boolean>(false);

  const methods = useForm<IScoring>({
    resolver: yupResolver(schemaScoringStep),
  });

  const onSubmit: SubmitHandler<IScoring> = (
    {
      gender,
      maritalStatus,
      dependentAmount,
      passportIssueDate,
      passportIssueBranch,
      employmentStatus,
      employerINN,
      salary,
      position,
      workExperienceTotal,
      workExperienceCurrent,
    },
  ) => {
    const data = {
      gender, 
      maritalStatus, 
      dependentAmount, 
      passportIssueDate: transformDate(new Date(passportIssueDate)), 
      passportIssueBranch: setHyphen(passportIssueBranch),
      employment: {
        employmentStatus, 
        employerINN: String(employerINN), 
        salary, 
        position, 
        workExperienceTotal,
        workExperienceCurrent,
      },
    };
    const getResource = async (url: string, data: {}) => {
      const res = await putApiResource(url, data);

      if (res) {
        setLoader(false);
        setSuccess(true);
        if(res[1] === 200) {
          const getStatus = async(url: string) => {
            const res = await getApiResource(url);
            if(res) {
              const status = res[0].statusHistory;
              for (let i = 0; i < status.length; i++) {
                const value = status[i].status;
                if(value === 'CC_DENIED') {
                  const getScoring = getLocalStorage('IsScoringOpen').IsScoringOpen;
                  const newArray = getScoring.filter((id:number) => id !== applicationId.getApplicationId);
                  setLocalStorage('IsScoringOpen', {IsScoringOpen: newArray});
                  navigate('/');
                }
              }
            }   
          };
          const timer =  setTimeout(() => getStatus(
            API_URL_GETAPPLICATION + '/' + applicationId.getApplicationId), 10000);
          return () => {
            clearTimeout(timer);
          };
        }
      }
    }; 
    setLoader(true);
    const timer =  setTimeout(() => 
      getResource(API_URL_PUTREGISTRATION + '/' + applicationId.getApplicationId, data), 1000);
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
        <section className={styles.Scoring}>
          <div className={styles.wrapper} id="form">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={styles.header}> 
                  <h2 className={styles.title}>
                        Continuation of the application
                  </h2>
                  <p className={styles.steps}>
                        Step 2 of 5
                  </p>
                </div>
                <div>
                  <div className={styles.list}>
                    {DATA_STATUS.map(({name, text, initial, options}) => {
                      return(
                        <div className={styles.item} key={name}>
                          <UILabel
                            name={name}
                            text={text}
                          />
                          <UISelect
                            name={name}
                            initial={initial}
                            options={options}
                          />
                        </div>
                      );
                    })} 
                  </div>
                  <div className={styles.list}>
                    {DATA_CODE.map(({name, text, placeholder}) => {
                      return(
                        <div className={styles.item} key={name}>
                          <UILabel
                            name={name}
                            text={text}
                          />
                          <UIInput
                            name={name}
                            placeholder={placeholder}
                          />
                        </div>
                      );
                    })}    
                  </div>
                </div>
                <h4 className={styles.subtitle}>
                        Employment
                </h4>
                <div>
                  <div className={styles.list}>
                    <div className={styles.item}>
                      <UILabel
                        name={'employmentStatus'}
                        text={'Your employment status'}
                      />
                      <UISelect
                        name={'employmentStatus'}
                        initial={''}
                        options={Object.values(StatusEmployment).map((status)=>{
                          return {title: status, el: status};
                        })}
                      />
                    </div>
                    {DATA_EMPLOYMENT.map(({name, text, placeholder}) => {
                      return(
                        <div className={styles.item} key={name}>
                          <UILabel
                            name={name}
                            text={text}
                          />
                          <UIInput
                            name={name}
                            placeholder={placeholder}
                          />
                        </div>
                      );
                    })}  
                  </div>
                  <div className={styles.list}>
                    <div className={styles.item}>
                      <UILabel
                        name={'position'}
                        text={'Your position'}
                      />
                      <UISelect
                        name={'position'}
                        initial={''}
                        options={Object.values(Position).map((status)=>{
                          return {title: status, el: status};
                        })}
                      />
                    </div>
                    {DATA_EXPERIENCE.map(({name, text, placeholder}) => {
                      return(
                        <div className={styles.item} key={name}>
                          <UILabel
                            name={name}
                            text={text}
                          />
                          <UIInput
                            name={name}
                            placeholder={placeholder}
                          />
                        </div>
                      );
                    })}  
                  </div>
                </div>
                <div className={styles.btn}>
                  <UIButton 
                    text="Continue"   
                    classes={styles.width}
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

export default Scoring;