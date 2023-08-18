import { useState } from 'react';
import { UseFormRegister, Path, FieldErrors  } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import cn from 'classnames';

import { PrescoringForm } from '../../../interfaces/interface';

import styles from './UIInput.module.css';

interface Iprops {
    name: Path<PrescoringForm>,
    register: UseFormRegister<PrescoringForm>,
    errors: FieldErrors<PrescoringForm>,
    type?: string,
    placeholder?: string,
    classes?: string,
    click: boolean,
    required?: boolean
}

const UIInput = ({ name, register, type='text', placeholder, classes, errors, click, required= true }: Iprops) => {
  const [value, setValue] = useState<string>('');

  const changeValue = (e: string) => {
    setValue(e.trim());
  };

  const isOkValue = () => {
    if (required && click) {
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