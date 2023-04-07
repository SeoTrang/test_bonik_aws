import React from 'react';
import { useForm } from 'react-hook-form';
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import styles from './Slide.module.scss';

import banner from './bannerWacth3.png'
import banner2 from './smartwatch4.png'
import banner3 from './iphone.jpg'
import banner4 from './banner_3d_1.png'
import banner5 from './banner_tai_nghe_1.png'

const Slide = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <div className={styles.slider}>
            <div className={styles.slideTop}>
                
                <div className={styles.slideDescription}>
                    <div className='slideTitle'>
                        <h2>
                            20% Giảm Giá Cho Lần Đầu Mua Hàng Tại Cửa Hàng
                        </h2>
                    </div>
                    <div className={styles.slideShortDe}>
                    Khả năng chụp ảnh tuyệt đỉnh: Bộ 4 camera sau trên iPhone 13 cho phép bạn chụp ảnh chân dung chất lượng cao, quay video 4K với khả năng chống rung và chế độ Night mode.
                    </div>

                    <div className={styles.slideAction}>
                        <button className={[styles.btnShopNow,styles.btnSlide].join(" ")}>
                            Mua ngay
                        </button>

                        <button className={[styles.btnSlide,styles.btnMore].join(" ")}>
                            Xem thêm
                        </button>
                    </div>
                </div>
                <div className='imgSlide'>
                    {/* <img src={banner} alt="" /> */}
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        }}
                        // pagination={{
                        // clickable: true,
                        // }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                        
                    </Swiper>

                    {/* <img src={banner5} alt="" /> */}
                </div>
            </div>
            
        </div>
    );
};

export default Slide;