import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from './FlashSale.module.scss'
import FlashSaleCard from './FlashSaleCard';

import FlashData from './FlashData'

const FlashSale = (props) => {
    // console.log('flashSale', FlashData);
    let title = (props.data.title === "") ? "Flash Sale" : props.data.title;
    let icon = (props.data.icon === "") ? "fa-solid fa-bolt" : props.data.icon;
    console.log(title);
    return (
        <div className={styles.flashSale}>

            <div className={styles.title}>
                <div className={styles.left}>
                    <i class={icon}></i>
                    <h2>{title}</h2>
                </div>
                <div className={styles.right}>
                    <span>Xem thêm</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>

 
                

                <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                       
                        navigation={true}
                        modules={[Navigation, Keyboard]}
                        className={styles.products+" navFlashSale"}
                    >
                       
                       {FlashData.FlashData.map((value,index)=>{
                        return (
                            <SwiperSlide key={index}><FlashSaleCard data={value}/></SwiperSlide>
                            
                        )
                       })
                    }
                    </Swiper>


            
        </div>
    );
};

export default FlashSale;