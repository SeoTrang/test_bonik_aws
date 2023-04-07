import React, { useEffect, useState } from 'react';
import styles from './ListColor.module.scss'

const colorData = [
    "Đỏ","Hồng","Tím","Xanh","Đen","Vàng"
];

const ListColor = ({onChanges}) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorSelect =  (e) => {
    const colorName = e.target.id;
    console.log(colorName);
    if (selectedColors.includes(colorName)) {
         setSelectedColors(selectedColors.filter((color) => color !== colorName));


    } else {
         setSelectedColors([...selectedColors, colorName]);
    }

    
    // console.log("selected inside : ",selectedColors);
  };

  


  useEffect(() => {
    console.log("selected inside : ",selectedColors);
    onChanges(selectedColors)
  }, [selectedColors]);

//   console.log("selected outside: ",selectedColors);
  
  

  return (
    <div className={styles.listColor +" mt05em"}>
      {colorData.map((color) => (

        <div  id={color} className={selectedColors.includes(color) ? (styles.color+" "+  styles.colorActive)  : styles.color} onClick={handleColorSelect}>
            {color}
        </div>

      ))}
    </div>
  );
};

export default ListColor;