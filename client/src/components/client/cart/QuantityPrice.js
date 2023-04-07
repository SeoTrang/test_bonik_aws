import React from 'react';
import { Link } from 'react-router-dom';


import styles from './QuantityPrice.module.scss'
const QuantityPrice = ({btnBack,btnNext,feeShiping}) => {
    console.log("quanti ; ",feeShiping);
    return (
        <div className={styles.quantityPrice}>
            <div className={styles.price}>
                <div className={styles.productPrice}>
                    <div className={styles.provisional}>
                        <span className={styles.provisionalTitle}>Tạm tính : </span>
                        <span className={styles.provisionalValue}>
                            50.980.000₫
                        </span>
                    </div>

                    <div className={styles.discount}>
                        <span className={styles.discountTitle}>
                            Giảm : 
                        </span>
                        <span className={styles.discountValue}>
                            - 200.000₫
                        </span>
                    </div>

                    <div className={styles.shippingFee}>
                        <span className={styles.shippingFeeTitle}>
                            Phí vận chuyển : 
                        </span>
                        <span className={styles.shippingFeeValue}>
                            {feeShiping ? (`+ ${feeShiping}₫`):"----"}
                        </span>
                    </div>

                    <div className={styles.totalPrice}>
                        <span className={styles.totalPriceTitle}>Tổng : </span>
                        <span className={styles.totalPriceValue}>50.780.000₫</span>
                    </div>
                </div>

                <div className={styles.line}>

                </div>

                <div className={styles.voucher}>
                    <div className={styles.formVoucher}>
                        <label>Nhập mã giảm giá </label>
                        <input type="text"  placeholder='Nhập mã ...'/>
                    </div>
                    <div className={styles.btnVoucher}>
                        <button>Áp dụng</button>
                    </div>
                </div>


            </div>

            <div className={styles.userAction}>
                <Link to={btnBack.url} className={styles.back}>
                    {/* <i class="fa-solid fa-angle-left"></i> */}
                    <span>{btnBack.title}</span>
                </Link>
                
                <Link to={btnNext.url} className={styles.next}>
                    <span>{btnNext.title}</span>
                    {/* <i class="fa-solid fa-angle-right"></i> */}
                </Link>
            </div>
        </div>
    );
};

export default QuantityPrice;