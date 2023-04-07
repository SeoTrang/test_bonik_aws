import React from 'react';

import styles from './ReviewCart.module.scss'
import QuantityPrice from './QuantityPrice';

const ReviewCart = () => {

    return (
        <div className={styles.reviewCart}>
            <div className={styles.containerReview}>
                <div className={styles.review}>
                    <div className={styles.title}>
                        Thôn tin vận chuyển  
                    </div>
                    <div className="boxProducts">
                        <div className={styles.myProduct}>
                            <div className={styles.count}>
                                1.
                            </div>
                            <div className={styles.product}>
                                    <div  className={styles.img}>
                                        <img src="https://fptshop.com.vn/Uploads/Originals/2022/11/30/638054213959247730_ip-14-pro-tim-1.jpg" alt="" />

                                    </div>

                                    <div className={styles.shortInfo}>
                                        <div className={styles.infoTop}>
                                            <div className={styles.nameProduct}>
                                                <span>
                                                    iPhone 14 Pro 128GB
                                                </span>
                                            </div>

                                            
                                        </div>

                                        <div className={styles.infoMid}>
                                            <div className='version'>
                                                128GB
                                            </div>

                                            <div className={styles.color}>
                                                Tím
                                            </div>
                                        </div>

                                        <div className={styles.infoBottom}>
                                            <div className={styles.price}>
                                                <span className={styles.productPrice}>
                                                    25.490.000₫
                                                </span>
                                                <span className={styles.expression}>
                                                    x
                                                </span>

                                                <span className={styles.quantityProduct}>
                                                    2
                                                </span>
                                                <span className={styles.equas}>
                                                    =
                                                </span>
                                                <span className={styles.quantityPrice}>
                                                    50.980.000₫
                                                </span>
                                            </div>

                                        </div>


                                    </div>
                            </div>
                        </div>

                        <div className={styles.myProduct}>
                            <div className={styles.count}>
                                2.
                            </div>
                            <div className={styles.product}>
                                    <div  className={styles.img}>
                                        <img src="https://fptshop.com.vn/Uploads/Originals/2022/11/30/638054213959247730_ip-14-pro-tim-1.jpg" alt="" />

                                    </div>

                                    <div className={styles.shortInfo}>
                                        <div className={styles.infoTop}>
                                            <div className={styles.nameProduct}>
                                                <span>
                                                    iPhone 14 Pro 128GB
                                                </span>
                                            </div>

                                            
                                        </div>

                                        <div className={styles.infoMid}>
                                            <div className='version'>
                                                128GB
                                            </div>

                                            <div className={styles.color}>
                                                Tím
                                            </div>
                                        </div>

                                        <div className={styles.infoBottom}>
                                            <div className={styles.price}>
                                                <span className={styles.productPrice}>
                                                    25.490.000₫
                                                </span>
                                                <span className={styles.expression}>
                                                    x
                                                </span>

                                                <span className={styles.quantityProduct}>
                                                    2
                                                </span>
                                                <span className={styles.equas}>
                                                    =
                                                </span>
                                                <span className={styles.quantityPrice}>
                                                    50.980.000₫
                                                </span>
                                            </div>

                                        </div>


                                    </div>
                            </div>
                        </div>
                        <div className={styles.myProduct}>
                            <div className={styles.count}>
                                3.
                            </div>
                            <div className={styles.product}>
                                    <div  className={styles.img}>
                                        <img src="https://fptshop.com.vn/Uploads/Originals/2022/11/30/638054213959247730_ip-14-pro-tim-1.jpg" alt="" />

                                    </div>

                                    <div className={styles.shortInfo}>
                                        <div className={styles.infoTop}>
                                            <div className={styles.nameProduct}>
                                                <span>
                                                    iPhone 14 Pro 128GB
                                                </span>
                                            </div>

                                            
                                        </div>

                                        <div className={styles.infoMid}>
                                            <div className='version'>
                                                128GB
                                            </div>

                                            <div className={styles.color}>
                                                Tím
                                            </div>
                                        </div>

                                        <div className={styles.infoBottom}>
                                            <div className={styles.price}>
                                                <span className={styles.productPrice}>
                                                    25.490.000₫
                                                </span>
                                                <span className={styles.expression}>
                                                    x
                                                </span>

                                                <span className={styles.quantityProduct}>
                                                    2
                                                </span>
                                                <span className={styles.equas}>
                                                    =
                                                </span>
                                                <span className={styles.quantityPrice}>
                                                    50.980.000₫
                                                </span>
                                            </div>

                                        </div>


                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxInfo}>
                        <div className='userName'>
                            <div className={styles.addressTitle}>
                                Nguời nhận : 
                            </div>
                            <div className={styles.addressValue}>
                                Ma Seo Trang
                            </div>
                        </div>
                        <div className='email'>
                            <div className={styles.addressTitle}>Email : </div>
                            <div className={styles.addressValue}>seotrangbh24@gmail.com</div>
                        </div>
                        <div className='phoneNumber'>
                            <div className={styles.addressTitle}>Số điện thoại</div>
                            <div className={styles.addressValue}>0386640397</div>
                        </div>
                        <div className={styles.boxAddress}>
                            <div className={styles.addressTitle}>Địa chỉ : </div>
                            <div className={styles.addressValue + " " + styles.address}>
                                <span className='Village'>
                                    Thôn ngài ma,
                                </span>
                                <span className='wards'>Xã Thải Giàng Phố,</span>
                                <span className='district'>Huyện Bắc Hà,</span>
                                <span className='province'>Tỉnh Lào Cai.</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.userAction}>
                <QuantityPrice btnBack={{title:'Quay lại nhập thông tin',url:'/form-cart'}} btnNext={{title:'Đặt hàng',url:'/review-cart'}} feeShiping={''}/>
            </div>
        </div>
    );
};

export default ReviewCart;