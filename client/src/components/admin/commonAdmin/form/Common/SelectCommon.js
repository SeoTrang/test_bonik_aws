import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import styles from './SelectCommon.module.scss';

const SelectCommon = ({onChange,data,disabled, title , value}) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [selectValue,setSelectValue] = useState("");
  const [dataarr,setDataarr]= useState([]);


  const handleBlur = () => {
    setIsBlurred(true);
  };
  // console.log("my data : ",data);

  const hadleSelectValue = (event) =>{
    setSelectValue(event.target.value);
    onChange(event.target.value)
    // console.log(event.target.value);
  }

  useEffect(()=>{
    setDataarr(data)
    console.log("my data : ",data);
  },[]);

  return (
    <div id="selectCommon">
      <div>{title}</div>
      <Form.Select  
        className={styles.select + ' mt05em'} 
        onBlur={handleBlur} 
        disabled={disabled} 
        value={value}
        onChange={hadleSelectValue}
        >
          <option value="">Chọn danh mục</option>
          {data?data.map((value,index)=>{
            return (
              <option key={index} value={value.id}>{value.name}</option>

            )
          })
          :
          null
        }
          {/* <option value="may-tinh">Nokia</option>
          <option value="smartwatch">Samsung</option>
          <option value="smartwatch">Realme</option> */}
      </Form.Select>
      {
      isBlurred && selectValue === "" ? <div className={styles.errorMessage}>Trường này là bắt buộc</div> : null
        
      }
    </div>
  );
};

export default SelectCommon;
