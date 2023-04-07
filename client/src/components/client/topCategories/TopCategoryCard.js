import React from 'react';


import styles from './TopCategoryCard.module.scss'

const TopCategoryCard = (props) => {
   
    return (
        <div className={styles.categoryCard} key={props.data.id}>
            <div className={styles.img}>
                <img src={props.data.img} alt="" />
            </div>

            <div className={styles.cateName}>
                <span>
                    {props.data.name}
                </span>
            </div>
        </div>


    );
};

export default TopCategoryCard;