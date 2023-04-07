import React from 'react';

import styles from './Overview.module.scss'

import android from './android.png'
import apple from './apple.png'
import windows from './windows.png'
import smartwatch from './smartwatch.png'


const Overview = () => {
    return (
        <div className={styles.Overview +" mt2em"}>
            <div className={styles.OverviewCard}>
                <div className={styles.images}>
                    <img src={android} alt="" />
                </div>

                <div className={styles.title}>
                    Tổng doanh thu
                </div>
                <div className={styles.value}>
                    130.000.000₫
                </div>
            </div>

            <div className={styles.OverviewCard}>
                <div className={styles.images}>
                    <img src={apple} alt="" />
                </div>

                <div className={styles.title}>
                    Số đơn đặt hàng
                </div>
                <div className={styles.value}>
                    13.000
                </div>
            </div>

            <div className={styles.OverviewCard}>
                <div className={styles.images}>
                    <img src={windows} alt="" />
                </div>

                <div className={styles.title}>
                    Số nhân viên
                </div>
                <div className={styles.value}>
                    13
                </div>
            </div>

            <div className={styles.OverviewCard}>
                <div className={styles.images}>
                    <img src={smartwatch} alt="" />
                </div>

                <div className={styles.title}>
                    Số khách hàng
                </div>
                <div className={styles.value}>
                    1.300
                </div>
            </div>
        </div>
    );
};

export default Overview;