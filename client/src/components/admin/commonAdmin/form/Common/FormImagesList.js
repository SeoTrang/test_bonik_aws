import React, { useState } from 'react';

import styles from './FormImagesList.module.scss'

const FormImagesList = ({ files, onChange }) => {
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileInputChange = (e) => {
    const selectedFiles = e.target.files;
    onChange(selectedFiles);
    const urls = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        urls.push(reader.result);
        if (urls.length === selectedFiles.length) {
          setPreviewUrls(urls);
        }
      };
    }
  };

  return (
    <div className='boxImgForm'>
        <div className='form_title'>Danh sách ảnh</div>
        <div className='form_img  form-images-list mt05em'>
      
      <div className= { 'imgbox imgbox_list form-images-list__preview'}>
        { previewUrls.length > 0 ?
        
        (<div className={ styles.listImg }>
            {previewUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Preview ${index}`} />
          </div>
        ))}
        </div>)
        :
        <div className='empty-image-placeholder'>Không có danh sách sản phẩm nào được chọn</div>
    
    }
      </div>

      <div className={ 'formImg form-images-list__input'}>
        <label htmlFor='files-input'>Chọn ảnh</label>
        <input
          type='file'
          id='files-input'
          name='files-input'
          accept='.jpg,.jpeg,.png,webp'
          multiple
          onChange={handleFileInputChange}
        />
      </div>
    </div>
    </div>
  );
};

export default FormImagesList;
