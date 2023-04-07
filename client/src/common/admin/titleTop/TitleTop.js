import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './TitleTop.module.scss'

const TitleTop = ({titleLeft,titleRight,url}) => {
    

    return (
        <div className={styles.titleTop}>
            <div className={styles.titleLeft}>
                <i class={titleLeft.icon}></i>
                <span>{titleLeft.title}</span>
            </div>

            {titleRight && 
            <div className={styles.titleRight}>
                
                 <Link to={url}> {titleRight.title}</Link>
                
                
                
            </div>
            }

        </div>
    );
};

export default TitleTop;