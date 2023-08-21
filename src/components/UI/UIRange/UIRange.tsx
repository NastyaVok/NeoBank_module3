import { Dispatch, useState } from 'react';
import { useFormContext, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import cn from 'classnames';

import styles from './UIRange.module.css';

interface Iprops {
    title: string
    name: string,
    value: string,
    setValue: Dispatch<React.SetStateAction<string>>,
    placeholder?: string,
    classes?: string,
    min: number,
    max: number,
}

const UIRange = ({ title, name, value, setValue, placeholder, classes, min, max}: Iprops) => {
  const [width, setWidth] = useState<number>(0);
  const { register, formState: {errors} } = useFormContext<FieldValues>();

  const mathPercents = (value: string) => {
    const requiredNumber = Math.round((Number(value) - 15000) / 590000 * 100);
    setWidth(requiredNumber);
  };

  const widthValue = {
    'width': `${width}%`,
  };

  const changeValue = (e: string) => {
    setValue(e.trim());
    mathPercents(e);
  };

  return (
    <>
      <p className={styles.title}>
        {title}
      </p>
      <p className={styles.number}>
        {Number(value).toLocaleString()}
      </p>
      <input
        {...register(name, {required: true})}
        type="range"
        className={cn(styles.range, classes)}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {changeValue(e.target.value);}}
        min={min}
        max={max}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className={styles.error}>{message}</p>}
      />
      <div className={styles.line__container}>
        <span className={styles.line} style={widthValue}></span>
      </div>
      <div className={styles.amount}>
        <p className={styles.min}>{min.toLocaleString()}</p>
        <p className={styles.max}>{max.toLocaleString()}</p>
      </div> 
    </>
  );
};

export default UIRange;