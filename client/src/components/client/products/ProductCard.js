import React from 'react';

import styles from './ProductCard.module.scss'

const FlashSaleCard = (props) => {

    // console.log(props);

    return (
        <div className={styles.productCard}>
            <div className={styles.img}>
                <img src={props.data.img} alt="" />
            </div>

            <div className={styles.productTop}>
                <div className={styles.discount}>
                    <div className='loader'>
                        <div className={'wrapper ' + styles.box}>
                            
                                <span>
                                    -{props.data.discount}% Off
                                </span>
                            
                        </div>
                    </div>
                </div>

                <div className={styles.productLike}>
                    <i class="fa-regular fa-heart"></i>
                     {/* <i class="fa-solid fa-heart"></i> */}
                </div>
            </div>

            <div className='productInfo'>
                <div className={styles.nameProduct}>
                    <h4>
                        {props.data.name}
                    </h4>
                </div>

                <div className={styles.interact}>
                    <div className={styles.star}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>

                    <div className={styles.moreInteract}>

                        <div className={styles.like}>
                            <i class="fa-solid fa-heart"></i>
                            <span>1k2</span>
                        </div>
                        <div className='comment'>
                            <i class="fa-regular fa-message"></i>
                            <span>102</span>
                        </div>

                    </div>
                </div>

                <div className={styles.priceAndAction}>
                    <div className='price'>
                        <div className={styles.priceCurrent}>
                            {props.data.price}₫
                        </div>
                        <div className={styles.priceOld}>
                            {props.data.priceOld}₫
                        </div>
                    </div>

                    <div className={styles.action}>
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default FlashSaleCard;