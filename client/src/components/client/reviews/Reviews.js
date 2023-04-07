
import React from 'react';


import ModalReview from './ModalReview';

import styles from './Reviews.module.scss'




const Reviews = () => {


    

    return (
        <div className={styles.reviews}>
                    <div className={styles.reviewsTitle}>
                        <h4>Đánh giá sản phẩm</h4>
                    </div>

                    <div className={styles.boxReviews}>
                        <div className={styles.averageStar}>
                            <div className="averageTitle">
                                <span>Đánh Giá Trung Bình</span>
                            </div>

                            <div className={styles.average}>
                                <span>4.9/5</span>
                            </div>

                            <div className={styles.listStar}>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>

                            <div className={styles.totalReviews}>
                                <span>100 đánh giá</span>
                            </div>
                        </div>

                        <div className={styles.progressBlock}>
                            <div className={styles.progressBlockLine}>
                                <span className="progressText">5</span>
                                <i class="fa-solid fa-star"></i>
                                <div className={styles.progressLine}>
                                    <div className={styles.progressBar} style={{width: "97%"}}></div>
                                </div>
                                <p className="progressText">97%</p>
                            </div>

                            <div className={styles.progressBlockLine}>
                                <span className="progressText">4</span>
                                <i class="fa-solid fa-star"></i>
                                <div className={styles.progressLine}>
                                    <div className={styles.progressBar} style={{width: "3%"}}></div>
                                </div>
                                <p className="progressText">3%</p>
                            </div>

                            <div className={styles.progressBlockLine}>
                                <span className="progressText">3</span>
                                <i class="fa-solid fa-star"></i>
                                <div className={styles.progressLine}>
                                    <div className={styles.progressBar} style={{width: "0%"}}></div>
                                </div>
                                <p className="progressText">0%</p>
                            </div>

                            <div className={styles.progressBlockLine}>
                                <span className="progressText">2</span>
                                <i class="fa-solid fa-star"></i>
                                <div className={styles.progressLine}>
                                    <div className={styles.progressBar} style={{width: "0%"}}></div>
                                </div>
                                <p className="progressText">0%</p>
                            </div>

                            <div className={styles.progressBlockLine}>
                                <span className="progressText">1</span>
                                <i class="fa-solid fa-star"></i>
                                <div className={styles.progressLine}>
                                    <div className={styles.progressBar} style={{width: "0%"}}></div>
                                </div>
                                <p className="progressText">0%</p>
                            </div>
                            
                        </div>

                        <div className={styles.review}>
                            <div className="reviewText">
                                <span>Bạn đã dùng sản phẩm này?</span>
                            </div>

                            <div className="buttonReview">
                                <ModalReview/>
                            </div>
                        </div>
                    </div>

                    <div>
                        
                    </div>
        </div>
    );
};

export default Reviews;