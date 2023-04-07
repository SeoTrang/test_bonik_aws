import React from 'react';

import styles from './TopCategories.module.scss'
import TopCategoryCard from './TopCategoryCard';
import topCategoryData from './TopCategoriesData';



const TopCategories = () => {
    // console.log(topCategoryData.category);
    const data = topCategoryData.category;
    // console.log("data : ",data);
    return (
        <div className={styles.topCategory}>
            <div className={styles.title}>
                <div className={styles.left}>
                <i class="fa-solid fa-qrcode"></i>
                    <h2>Top Danh Mục</h2>
                </div>
                <div className={styles.right}>
                    <span>Xem thêm</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>

            <div className={styles.container}>
       
                {data.map((value,index)=>{
                    return(
                      
                        
                        <TopCategoryCard key={index} data={value}/>
                    )
                })}
               
            </div>

        </div>
    );
};

export default TopCategories;