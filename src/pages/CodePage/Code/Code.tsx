import { useState, useEffect, Dispatch, Fragment, ChangeEvent, KeyboardEvent, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import UILoader from '../../../components/UI/UILoader/UILoader';
import { postApiResource } from '../../../utils/network';
import { useStore } from '../../../utils/hooks/useStore';
import { API_URL_POSTDOCUMENT, API_URL_POSTCODE } from '../../../constants/api';

import styles from './Code.module.css';

interface IProps {
    setSuccess: Dispatch<React.SetStateAction<boolean>>,
}

let currentOTPIndex: number = 0;

const Code = observer(({setSuccess}: IProps) => {
  const {
    rootStore: { applicationId, sesCode },
  } = useStore();

  const [loader, setLoader] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [invalid, setInvalid] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({target}: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);
   
    if(!value) {
      setActiveOTPIndex(currentOTPIndex - 1);
    } else {
      setActiveOTPIndex(currentOTPIndex + 1);
    };
    setOtp(newOTP);
  };

  const handleOnKeyDown = ({key}: KeyboardEvent<HTMLInputElement>, index: number)  => {
    currentOTPIndex = index;
    
    if(key === 'Backspace') {
      setActiveOTPIndex(currentOTPIndex - 1);
    }
  };
  
  const validateCode = () => {
    const str = otp.join('');
    const curCode = sesCode.getSesCode;
    if(str === curCode) {
      const getResource = async (url: string, data: string, options: {}) => {
        const res = await postApiResource(url, data,options);

        if (res) {
          if(res[1] === 200) {
            setLoader(false);
            setSuccess(true);
          }
        }
      }; 
      setLoader(true);
      const timer =  setTimeout(() => 
        getResource(
          API_URL_POSTDOCUMENT + '/' + applicationId.getApplicationId + API_URL_POSTCODE, str, 
          {headers: {'Content-Type': 'application/json'}}), 1000);
      return () => {
        clearTimeout(timer);
      };
    } else if (str.length === 4) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };

  useEffect (() => {
    validateCode();
  }, [otp]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);


  return (
    <>
      {loader 
        ?
        <UILoader />
        :
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Please enter confirmation code
          </h2>
          <div className={styles.container}>
            {otp.map((_, index) => {
              return (
                <Fragment key={index}>
                  <input
                    ref={index === activeOTPIndex ? inputRef: null}
                    type="number"
                    className={cn(styles.input, otp[index].length ? styles.filled: '')}
                    placeholder={'.'}
                    onChange={handleOnChange}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    value={otp[index]}
                    disabled={index === 0 || otp[index - 1]?.length > 0 ? false : true}
                  />
                  {index === otp.length - 1 ? null : (
                    <span className={styles.length}/>
                  )}
                </Fragment>
              );
            })}
          </div>
          {invalid &&
        <p className={styles.text}>
            Invalid confirmation code
        </p>
          }
        </div>
      }
    </>
  );
});

export default Code;