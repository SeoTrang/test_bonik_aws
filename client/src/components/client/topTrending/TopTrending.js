import React from 'react';


import styles from './TopTrending.module.scss'

import TopTrendingCard from './TopTrendingCard';

const TopTrending = () => {
    return (
        <div className='mt3em'>
            <div className={styles.title}>
                <div className={styles.left}>
                    <i class="fa-solid fa-arrow-trend-up"></i>
                    <h2>Top Trending</h2>
                </div>
                <div className={styles.right}>
                    <span>Xem thêm</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>

            <div className={styles.container}>
                <TopTrendingCard/>
                <TopTrendingCard/>
                <TopTrendingCard/>
                <TopTrendingCard/>
            </div>

        </div>
    );
};

export default TopTrending;