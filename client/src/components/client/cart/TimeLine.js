import React from 'react';

import styles from './TimeLine.module.scss'

const TimeLine = ({FormActive,ReviewActive}) => {

    
    return (
        <div>
            <div className={styles.timeLine}>
                        <span className={styles.itemTimeline+" "+styles.timeLineActive}>
                            Giỏ hàng
                        </span>
                        <div className={styles.line +" "+ (FormActive ? styles.lineActive : null)}>

                        </div>

                        <span className={styles.itemTimeline  +" "+ (FormActive ? styles.timeLineActive : null)}>
                            Nhập thông tin
                        </span>

                        <div className={styles.line  +" "+ (ReviewActive ? styles.lineActive : null)} >

                        </div>

                        <span className={styles.itemTimeline  +" "+ (ReviewActive ? styles.timeLineActive: null)}>
                            Chi tiết đơn hàng
                        </span>
                    </div>
        </div>
    );
};

export default TimeLine;