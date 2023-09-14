import { useState } from 'react';
import { useFormContext, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import cn from 'classnames';

import styles from './UISelect.module.css';

interface Iprops {
    name: string,
    classes?: string,
    initial: string | number,
    options: { el: string | number, title: string | number }[]
}

const UISelect = ({ name, classes, options, initial }: Iprops) => {
  const [value, setValue] = useState(initial);
  const { register, formState: {errors} } = useFormContext<FieldValues>();
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
        <option value="" hidden></option>
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


