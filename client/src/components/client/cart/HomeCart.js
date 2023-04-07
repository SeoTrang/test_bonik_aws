import React from 'react';
import { Link } from 'react-router-dom';
// import CheckBox from '../checkbox/CheckBox';

import styles from './HomeCart.module.scss'
import QuantityPrice from './QuantityPrice';

const HomeCart = () => {
    return (
        <div className={styles.homeCart}>
            <div className={styles.boxProduct}>
               
                


               <div className={styles.myProduct}>
                    <div className={styles.checkBox}>
                        {/* <CheckBox/> */}
                        <input type="checkbox" name='checkBox' defaultChecked={true} value={"test"}/>
                    </div>
                    <div className={styles.product}>
                            <Link to={'/detail'} className={styles.img}>
                                <img src="https://fptshop.com.vn/Uploads/Originals/2022/11/30/638054213959247730_ip-14-pro-tim-1.jpg" alt="" />

                            </Link>

                            <div className={styles.shortInfo}>
                                <div className={styles.infoTop}>
                                    <Link to={'/detail'} className={styles.nameProduct}>
                                        <span>
                                            iPhone 14 Pro 128GB
                                        </span>
                                    </Link>

                                    <div className={styles.deleteProduct}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </div>

                                <div className={styles.infoMid}>
                                    <div className='version'>
                                        128GB
                                    </div>

                                    <div className={styles.color}>
                                        Tím
                                    </div>
                                </div>

                                <div className={styles.infoBottom}>
                                    <div className={styles.price}>
                                        <span className={styles.productPrice}>
                                            25.490.000₫
                                        </span>
                                        <span className={styles.expression}>
                                            x
                                        </span>

                                        <span className={styles.quantityProduct}>
                                            2
                                        </span>
                                        <span className={styles.equas}>
                                            =
                                        </span>
                                        <span className={styles.quantityPrice}>
                                            50.980.000₫
                                        </span>
                                    </div>

                                    <div className={styles.productAction}>
                                        <button className={styles.minus}><i class="fa-solid fa-minus"></i></button>
                                        <span>1</span>
                                        <button className={styles.plus}><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>


                            </div>
                        </div>
               </div>
               <div className={styles.myProduct}>
                    <div className={styles.checkBox}>
                        {/* <CheckBox/> */}
                        <input type="checkbox" name='checkBox' defaultChecked={true} value={"test"}/>
                    </div>
                    <div className={styles.product}>
                            <Link to={'/detail'} className={styles.img}>
                                <img src="https://fptshop.com.vn/Uploads/Originals/2022/11/30/638054213959247730_ip-14-pro-tim-1.jpg" alt="" />

                            </Link>

                            <div className={styles.shortInfo}>
                                <div className={styles.infoTop}>
                                    <Link to={'/detail'} className={styles.nameProduct}>
                                        <span>
                                            iPhone 14 Pro 128GB
                                        </span>
                                    </Link>

                                    <div className={styles.deleteProduct}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </div>

                                <div className={styles.infoMid}>
                                    <div className='version'>
                                        128GB
                                    </div>

                                    <div className={styles.color}>
                                        Tím
                                    </div>
                                </div>

                                <div className={styles.infoBottom}>
                                    <div className={styles.price}>
                                        <span className={styles.productPrice}>
                                            25.490.000₫
                                        </span>
                                        <span className={styles.expression}>
                                            x
                                        </span>

                                        <span className={styles.quantityProduct}>
                                            2
                                        </span>
                                        <span className={styles.equas}>
                                            =
                                        </span>
                                        <span className={styles.quantityPrice}>
                                            50.980.000₫
                                        </span>
                                    </div>

                                    <div className={styles.productAction}>
                                        <button className={styles.minus}><i class="fa-solid fa-minus"></i></button>
                                        <span>1</span>
                                        <button className={styles.plus}><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>


                            </div>
                        </div>
               </div>
               <div className={styles.myProduct}>
                    <div className={styles.checkBox}>
                        {/* <CheckBox/> */}
                        <input type="checkbox" name='checkBox' defaultChecked={true} value={"test"}/>
                    </div>
                    <div className={styles.product}>
                            <Link to={'/detail'} className={styles.img}>
                                <img src="https://fptshop.com.vn/Uploads/Originals/2022/11/30/638054213959247730_ip-14-pro-tim-1.jpg" alt="" />

                            </Link>

                            <div className={styles.shortInfo}>
                                <div className={styles.infoTop}>
                                    <Link to={'/detail'} className={styles.nameProduct}>
                                        <span>
                                            iPhone 14 Pro 128GB
                                        </span>
                                    </Link>

                                    <div className={styles.deleteProduct}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </div>

                                <div className={styles.infoMid}>
                                    <div className='version'>
                                        128GB
                                    </div>

                                    <div className={styles.color}>
                                        Tím
                                    </div>
                                </div>

                                <div className={styles.infoBottom}>
                                    <div className={styles.price}>
                                        <span className={styles.productPrice}>
                                            25.490.000₫
                                        </span>
                                        <span className={styles.expression}>
                                            x
                                        </span>

                                        <span className={styles.quantityProduct}>
                                            2
                                        </span>
                                        <span className={styles.equas}>
                                            =
                                        </span>
                                        <span className={styles.quantityPrice}>
                                            50.980.000₫
                                        </span>
                                    </div>

                                    <div className={styles.productAction}>
                                        <button className={styles.minus}><i class="fa-solid fa-minus"></i></button>
                                        <span>1</span>
                                        <button className={styles.plus}><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>


                            </div>
                        </div>
               </div>
               <div className={styles.myProduct}>
                    <div className={styles.checkBox}>
                        {/* <CheckBox/> */}
                        <input type="checkbox" name='checkBox' defaultChecked={true} value={"test"}/>
                    </div>
                    <div className={styles.product}>
                            <Link to={'/detail'} className={styles.img}>
                                <img src="https://fptshop.com.vn/Uploads/Originals/2022/11/30/638054213959247730_ip-14-pro-tim-1.jpg" alt="" />

                            </Link>

                            <div className={styles.shortInfo}>
                                <div className={styles.infoTop}>
                                    <Link to={'/detail'} className={styles.nameProduct}>
                                        <span>
                                            iPhone 14 Pro 128GB
                                        </span>
                                    </Link>

                                    <div className={styles.deleteProduct}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </div>

                                <div className={styles.infoMid}>
                                    <div className='version'>
                                        128GB
                                    </div>

                                    <div className={styles.color}>
                                        Tím
                                    </div>
                                </div>

                                <div className={styles.infoBottom}>
                                    <div className={styles.price}>
                                        <span className={styles.productPrice}>
                                            25.490.000₫
                                        </span>
                                        <span className={styles.expression}>
                                            x
                                        </span>

                                        <span className={styles.quantityProduct}>
                                            2
                                        </span>
                                        <span className={styles.equas}>
                                            =
                                        </span>
                                        <span className={styles.quantityPrice}>
                                            50.980.000₫
                                        </span>
                                    </div>

                                    <div className={styles.productAction}>
                                        <button className={styles.minus}><i class="fa-solid fa-minus"></i></button>
                                        <span>1</span>
                                        <button className={styles.plus}><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>


                            </div>
                        </div>
               </div>
                
            </div>

            <div className={styles.userAction}>
                <QuantityPrice btnBack={{title:'Quay lại mua sắm', url:'/'}} btnNext={{title:'Đi tới nhập thông tin',url:'/form-cart'}}/>
            </div>
        </div>
    );
};

export default HomeCart;