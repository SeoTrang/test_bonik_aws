import React from 'react';

import styles from './Slogan.module.scss'

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.sloganCard}>
                <i class="fa-solid fa-credit-card"></i>
                <span>Thanh toán an toàn</span>
            </div>
            <div className={styles.sloganCard}>
                <i class="fa-solid fa-truck-fast"></i>
                <span>Giao hàng nhanh chóng</span>
            </div>
            <div className={styles.sloganCard}>
                <i class="fa-solid fa-hand-holding-heart"></i>
                <span>Chất lượng cam kết</span>
            </div>
            <div className={styles.sloganCard}>
                <i class="fa-solid fa-headset"></i>
                <span>Hỗ trợ 24/7</span>
            </div>
        </div>
    );
};

export default Slogan;