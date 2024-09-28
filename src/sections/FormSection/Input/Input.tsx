import React, { useState } from 'react';
import styles from './Input.module.css';
import { GreenCircle } from '../../../assets/svg/GreenCircle';
import { RedCircle } from '../../../assets/svg/RedCircle';
import { formInterface, BoolStr, errorsInterface } from '../../../types/types';

interface Props {
  placeholder: string;
  error: BoolStr;
  isValid?: boolean;
  name: string;
  type: string;
  data: formInterface;
  setData: React.Dispatch<React.SetStateAction<formInterface>>;
  setErrors: React.Dispatch<React.SetStateAction<errorsInterface>>;
  setIsValid: React.Dispatch<React.SetStateAction<[boolean, boolean]>>;
}

const initialErrors: errorsInterface = {
  name: [false, ''],
  phone: [false, ''],
};

export const Input: React.FC<Props> = ({
  placeholder,
  error,
  isValid,
  name,
  type,
  setData,
  data,
  setErrors,
  setIsValid,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (data[name] === '') {
      setIsFocused(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curr = e.target.value;
    setData((prev) => ({ ...prev, [name]: curr }));
    setErrors(initialErrors);
    setIsValid([false, false]);
  };

  return (
    <div className={styles.container}>
      <label className={`${styles.label} ${isFocused || data[name] ? styles.label_focused : ''}`}>
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        className={`${styles.input} ${error[0] ? styles.error : ''} ${isValid ? styles.valid : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={data[name]}
        placeholder=" "
      />
      {error[0] && (
        <>
          <span className={styles.error_message}>{error[1]}</span>
          <span className={styles.valid_indicator}>
            <RedCircle />
          </span>
        </>
      )}
      {isValid && (
        <span className={styles.valid_indicator}>
          <GreenCircle />
        </span>
      )}
    </div>
  );
};
