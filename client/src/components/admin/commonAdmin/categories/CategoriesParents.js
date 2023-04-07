import React from 'react';

import styles from './CategoriesParents.module.scss';

import earphone from './photo/tainghe.jpg'
import laptop from './photo/laptop.jpg'
import phone from './photo/phone.jpg'
import smartwatch from './photo/smartwatch.jpg'


const CategoriesParents = () => {
    return (
        <div className={styles.categoriesParents}>
            <div className={styles.item +" "+styles.earphone}>
                <div className='img'>
                    <img src={earphone} alt="" />
                </div>
                <div className={styles.description}>
                    <div className={styles.categoryName}>
                        Tai nghe
                    </div>
                    <div className='quantityProduct'>
                        123 chiếc
                    </div>
                </div>
            </div>

            <div className={styles.item + " "+styles.phone}>
                <div className='img'>
                    <img src={phone} alt="" />
                </div>
                <div className={styles.description}>
                    <div className={styles.categoryName}>
                        Điện thoại
                    </div>
                    <div className='quantityProduct'>
                        230 chiếc
                    </div>
                </div>
            </div>

            <div className={styles.item +" "+ styles.laptop}>
                <div className='img'>
                    <img src={laptop} alt="" />
                </div>
                <div className={styles.description}>
                    <div className={styles.categoryName}>
                        Laptop
                    </div>
                    <div className='quantityProduct'>
                        96 chiếc
                    </div>
                </div>
            </div>

            <div className={styles.item +" "+styles.smartwatch}>
                <div className='img'>
                    <img src={smartwatch} alt="" />
                </div>
                <div className={styles.description}>
                    <div className={styles.categoryName}>
                        SmartWatch
                    </div>
                    <div className='quantityProduct'>
                        320 chiếc
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesParents;