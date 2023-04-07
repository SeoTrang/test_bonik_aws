// 5 products per line
import React from 'react';

import styles from './Products.module.scss'
import FlashData from './ProductsData';
import ProductCard from './ProductCard';
import Filter from './filter/Filter'

const Products = () => {

    
    return (
        <div className='contentApp'>
            <div className='containerProducts'>
                <div className='route'>
                    <i class="fa-solid fa-house"></i>
                    <span>Trang chủ / Điện thoại</span>
                </div>

                <Filter category="mobilephone"/>
                <div className={styles.boxProducts}>
                {FlashData.FlashData.map((value,index)=>{
                    return(

                        <ProductCard key={index} data = {value}/>
                    )
                })}
                </div>
            </div>

        </div>
    );
};

export default Products;