import { useState } from 'react';
import { useFormContext, FieldValues } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';

import cn from 'classnames';

import styles from './UIInput.module.css';

interface IProps {
    name: string,
    placeholder: string,
    type?: string,
    classes?: string,
    required?: boolean
}

const UIInput = ({name, placeholder, type='text', classes, required=true }: IProps) => {
  const [value, setValue] = useState<string>('');
  const { register, formState: {errors, isSubmitted} } = useFormContext<FieldValues>();

  const changeValue = (e: string) => {
    setValue(e.trim());
  };
  
  const isOkValue = () => {
    if (required && isSubmitted) {
      const condition = Object.keys(errors).includes(name);
      return condition ? styles.mistake: styles.ok;
    }
    return '';
  };

  return (
    <>
      <input 
        {...register(name, {required: true})} 
        type={type}
        className={cn(styles.text, classes, isOkValue())}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {changeValue(e.target.value);}}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className={styles.error}>{message}</p>}
      />
    </>
        
  );
};

export default UIInput;