

import React, { useState } from 'react';
import FormImagesList from '../Common/FormImagesList';
import styles from './FormMobilePhone.module.scss'

const FormMobilePhone = ({ productID }) => {
  const [files, setFiles] = useState([]);

  const handleFilesInputChange = (selectedFiles) => {
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div className='formMobilePhone'>
      <div id='formProductCommon' className='formAddMobilePhone'>

        
        <div className='form_df_2item mt1em'>
          <div className={styles.listImg}>
            <FormImagesList files={files} onChange={handleFilesInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMobilePhone;
