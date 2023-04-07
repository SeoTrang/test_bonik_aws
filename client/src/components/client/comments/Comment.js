import React from 'react';

import styles from './Comment.module.scss'

const Comment = () => {
    return (
        <div className={styles.comments}>
                    <div className={styles.commentsTitle}>
                        <h4>Hỏi & đáp</h4>
                    </div>
                    <div className={styles.inputComment}>
                        <div className={styles.input}>
                            <textarea  rows="4" name='comment' placeholder='Mời bạn để lại bình luận...'></textarea>

                        </div>
                        <div className={styles.action}>
                            <button>Gửi bình luận</button>
                        </div>
                    </div>
                    <div className={styles.listComments}>
                        <div className={styles.comment}>
                            <div className={styles.userComent}>
                                <div className={styles.avatar}>
                                    <span>T</span>
                                
                                </div>
                                <div className={styles.boxContent}>
                                    <div className={styles.userName}>
                                        <span>Tráng</span>
                                    </div>

                                    <div className={styles.content}>
                                        <span>Giờ mình mua iphone 13 màu hồng thì giá bao nhiêu ạ</span>
                                    </div>

                                    <div className={styles.timeAt}>
                                        <span>07/03/2023</span>
                                        <div className={styles.replyContent}>
                                            Trả lời
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.userReply}>
                                <div className={styles.avatar}>
                                    <span>B</span>
                                
                                </div>
                                <div className={styles.boxContent}>
                                    <div className={styles.userName}>
                                        <span>Bonik</span>
                                    </div>

                                    <div className={styles.content}>
                                        <span>Chào Chi,
                                        <br/>
                                        Dạ bạn quan tâm dung lượng bao nhiêu ạ. Để được tư vấn cụ thể hơn về sản phẩm, chương trình khuyến mãi. Bạn vui lòng để lại số điện thoại, Shop xin phép chuyển thông tin sang bộ phận tư vấn hỗ trợ mình nhanh nhất. 
                                        <br/>
                                        Thân mến!</span>
                                    </div>

                                    <div className={styles.timeAt}>
                                        <span>07/03/2023</span>
                                        <div className={styles.replyContent}>
                                            Trả lời
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.comment}>
                            <div className={styles.userComent}>
                                <div className={styles.avatar}>
                                    <span>M</span>
                                
                                </div>
                                <div className={styles.boxContent}>
                                    <div className={styles.userName}>
                                        <span>Minh</span>
                                    </div>

                                    <div className={styles.content}>
                                        <span>Giờ mình mua iphone 13 màu hồng thì giá bao nhiêu ạ</span>
                                    </div>

                                    <div className={styles.timeAt}>
                                        <span>07/03/2023</span>
                                        <div className={styles.replyContent}>
                                            Trả lời
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.userReply}>
                                <div className={styles.avatar}>
                                    <span>B</span>
                                
                                </div>
                                <div className={styles.boxContent}>
                                    <div className={styles.userName}>
                                        <span>Bonik</span>
                                    </div>

                                    <div className={styles.content}>
                                        <span>Chào Chi,
                                        <br/>
                                        Dạ bạn quan tâm dung lượng bao nhiêu ạ. Để được tư vấn cụ thể hơn về sản phẩm, chương trình khuyến mãi. Bạn vui lòng để lại số điện thoại, Shop xin phép chuyển thông tin sang bộ phận tư vấn hỗ trợ mình nhanh nhất. 
                                        <br/>
                                        Thân mến!</span>
                                    </div>

                                    <div className={styles.timeAt}>
                                        <span>07/03/2023</span>
                                        <div className={styles.replyContent}>
                                            Trả lời
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    );
};

export default Comment;