import React, { useState, useRef } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import styles from './FormArticle.module.scss'

function Test1() {
  const sunEditorRef = useRef(null);
  const [formValue, setFormValue] = useState({ content: '' });

  const handleImageUploadBefore = (files, info, uploadHandler) => {
    const reader = new FileReader(); // Tạo một đối tượng FileReader
    reader.onload = (event) => {
      const base64 = event.target.result; // Chuyển đổi file sang base64
      uploadHandler({ progress: 100, url: base64 }); // Gọi hàm uploadHandler với tham số là base64
    };
    reader.readAsDataURL(files[0]); // Đọc file và chuyển đổi sang base64
    console.log("hello : ",files[0]);
  };

//   const handleSubmit = () => {
//     console.log(formValue.content);
//   };
  
  const handleContentChange = (content) => {
    console.log(content);
    setFormValue({
      ...formValue,
      content: content,
    });
  };

  return (
    <div>
      <SunEditor
      className={styles.formEditer}
        ref={sunEditorRef}
        onChange={handleContentChange}
        onImageUploadBefore={handleImageUploadBefore}
        setOptions={{
          buttonList: [
            ['undo', 'redo'],
            ['font', 'fontSize', 'formatBlock'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
            ['removeFormat'],
            ['fontColor', 'hiliteColor'],
            ['outdent', 'indent'],
            ['align', 'horizontalRule', 'list', 'table'],
            ['link', 'image', 'video'],
            ['fullScreen', 'showBlocks', 'codeView'],
            ['preview', 'print'],
          ],
          videoResizing: true,
          imageResizing: true,
          charCounter: true,
          videoFileInput: true,
          imageFileInput: true,
          imageWidth: '100%',
        }}
      />

      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
}

export default Test1;
