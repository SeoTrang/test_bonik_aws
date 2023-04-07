import React from 'react';

import styles from './TopTrendingCard.module.scss'

import img from './iphone14.jpg'

const TopTrendingCard = () => {
    return (
        <div className={styles.topTrendingCard}>
            <div className={styles.img}>
                <div className={styles.myImg}>
                    <div className={styles.imgCard +" "+ styles.myImg1}>
                        <img src={img} alt="" />
                    </div>

                    <div className={styles.myImg2+" "+styles.imgCard}>
                        <img src={img} alt="" />
                        <div className={styles.coating}></div>
                        <div className={styles.quantityImg}>
                        <span>10+</span>
                </div>
                    </div>
                </div>
                
                

            </div>

            <div className={styles.productTop}>
                <div className={styles.discount}>
                    <div className='loader'>
                        <div className={'wrapper ' + styles.box}>
                            
                                <span>
                                    -15% Off
                                </span>
                            
                        </div>
                    </div>
                </div>

                <div className={styles.productLike}>
                    <i class="fa-regular fa-heart"></i>
                    {/* <i class="fa-solid fa-heart"></i> */}
                </div>
            </div>

            <div className={styles.shortDescription}>
                <div className='description'>
                    <div className={styles.star}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>

                    <div className='name'>
                        <h4>
                            iPhone 14 Pro Max
                        </h4>
                    </div>

                    <div className='price'>
                        <h5>
                            29.490.000₫
                        </h5>
                    </div>

                </div>

                <div className={styles.navLeft}>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
    );
};

export default TopTrendingCard;