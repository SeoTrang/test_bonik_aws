import React, { useState, useRef } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

function Test1() {
  const sunEditorRef = useRef(null);
  const [formValue, setFormValue] = useState({ content: '' });

  const handleImageUploadBefore = (files, info, uploadHandler) => {
    console.log(files, info);
    uploadHandler({ progress: 50, url: 'your_uploaded_image_url' });
  };

  const handleSubmit = () => {
    console.log(formValue.content);
  };
  
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
    // Thêm 2 tùy chọn mới
    imageFileInput: true,
    imageWidth: '100%', // Thay đổi độ rộng ảnh khi chèn vào
  }}
/>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Test1;
