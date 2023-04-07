import React, { useEffect, useState } from 'react';
import styles from './FormCommon.module.scss';

const FormCommon = ({required,onChange,disabled, title, id, name, placeholder, type, pattern,formValue }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
    setIsBlurred(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsBlurred(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    

  };

  useEffect(()=>{
    // console.log(value);
    if (typeof onChange === 'function') {
      onChange(value);
    }
  },[value])

  return (
    <div>
      <div className={styles.inputCommon}>
        <label htmlFor={id} className={styles.label}>
          {title} 
          {required?(<span>(<span className={styles.required}>*</span>)</span>):null}
        </label>
        <input
          
          autoComplete="off"
          name={name}
          id={id}
          disabled={disabled}
          className={styles.input}
          type={type}
          placeholder={placeholder}
        
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          pattern={pattern}
          min={0}
        />
        {isBlurred && !value && (
          <div className={styles.errorMessage}>Trường này là bắt buộc</div>
        )}
        {isBlurred && value && !new RegExp(pattern).test(value) && (
          <div className={styles.errorMessage}>
            Giá trị nhập vào không đúng định dạng
          </div>
        )}
      </div>
    </div>
  );
};

export default FormCommon;
