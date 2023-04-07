import React from 'react';

import styles from './Header.module.scss'
import Avatar from '../admin/avatar_default.jpg';
import flag3 from './flag3.svg';

const Header = () => {
    return (
        <div className={styles.adHeader}>
            <div className={styles.headerLeft}>
                <div className={styles.search}>
                    
                    <input placeholder={'Bạn tìm gì..'}/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className={styles.headerRight}>

                
                
                <div className={styles.userInfo}>
                    <img src={Avatar} alt="" />
                </div>

                <div className={styles.notification}>
                    <i class="fa-solid fa-bell"></i>
                    <div>5</div>
                </div>

                <div className={styles.country}>
                    <span>VN</span>
                    <img src={flag3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;