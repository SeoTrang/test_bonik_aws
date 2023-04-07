import React from 'react';

import styles from './TopProducts.module.scss'

import ProductCard from '../products/ProductCard'
import data from '../flashSale/FlashData'
const TopProducts = (props) => {
    return (
        <div className={styles.topProducts}>
            <div className={styles.title}>
                <div className={styles.left}>
                    {/* {props.icon} */}
                    <i className={props.icon}></i>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.right}>
                    <span>Xem thêm</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>

            <div className={styles.container}>
                {data.FlashData.map((value,index)=>{
                    return(

                        <ProductCard data = {value}/>
                    )
                })}
            </div>

        </div>
    );
};

export default TopProducts;