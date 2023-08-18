import { useState } from 'react';
import { UseFormRegister, Path, FieldErrors  } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import cn from 'classnames';

import { PrescoringForm } from '../../../interfaces/interface';

import styles from './UISelect.module.css';

interface Iprops {
    name: Path<PrescoringForm>,
    register: UseFormRegister<PrescoringForm>,
    errors: FieldErrors<PrescoringForm>,
    classes?: string,
    initial: string | number,
    options: { el: string, title: string }[]
}

const UISelect = ({ name, register, classes, options, errors, initial }: Iprops) => {
  const [value, setValue] = useState(initial);
  const changeValue = (e: string) => {
    setValue(e);
  };

  return (
    <>
      <select 
        className={cn(styles.select, classes)} 
        {...register(name, {required: true})} 
        value={value}
        onChange={(e) => {changeValue(e.target.value);}}
      >
        {options.map(({el, title}) =>
          <option key={el} value={el}>{title}</option>,
        )} 
      </select>
      <ErrorMessage
        errors={errors}
        name= {name}
        render={({ message }) => <p className={styles.error}>{message}</p>}
      />
    </>
  );
};

export default UISelect;


