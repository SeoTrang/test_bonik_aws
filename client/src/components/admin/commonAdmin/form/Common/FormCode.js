import React from 'react';
import styles from './FormCommon.module.scss';

const FormCode = ({ title, id, name, placeholder, type, formValue }) => {


    console.log("form value : ",formValue);
  return (
    <div>
      <div className={styles.inputCommon}>
        <label htmlFor={id} className={styles.label}>
          {title}
        </label>
        <input
          autoComplete="off"
          name={name}
          id={id}
          disabled={true}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={formValue}
        />
       
      </div>
    </div>
  );
};

export default FormCode;
