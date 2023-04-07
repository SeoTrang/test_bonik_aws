import React from 'react';

import styles from './FormImages.module.scss'

const FormImages = ({ file, onChange,title }) => {
    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        onChange(selectedFile);
    };

    return (
        <div className='boxImgForm'>
            <div className='form_title'>{title}</div>
            <div className='form_img mt05em'>
            
            <div className={" imgbox"}>
                {file ? (
                    <img src={URL.createObjectURL(file)} alt='Selected file' />
                ) : (
                    <div className='empty-image-placeholder'>Không có ảnh nào được chọn</div>
                )}
            </div>
            <div className='formImg'>
                
                <label htmlFor='file-input'>Chọn ảnh</label>
                <input
                    type='file'
                    id='file-input'
                    accept='image/*'
                    onChange={handleFileInputChange}
                />
            </div>
        </div>
        </div>
    );
};

export default FormImages;
