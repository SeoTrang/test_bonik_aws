import {React, useState, useEffect} from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import flag2 from './flag3.svg'

import styles from './Header.module.scss';

const Header = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const [offset, setOffset] = useState(0);



    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // console.log(offset); 

    let onScroll = styles.headerChildButtom;
    let searchFont = styles.search;
    let headerFont = styles.header;
    if(offset > 134){
        searchFont = styles.searchEffect;
        onScroll = styles.headerChildButtomEffect;
        headerFont = styles.headerEffect;
    }



    // console.log(styles.navParent);




    return (
        <div  className={[headerFont,styles.size].join("  ")}>
            <div className={styles.headerChildTop}>
                <div className={styles.myHeadTop}>
                    <div className={[styles.headTop,'headTopLeft df_sb'].join(" ")}>
                            <div className='phone'>
                                <i class="fa-solid fa-phone-volume"></i>
                                <span>+84 386 640 397</span>
                            </div>
                            <div className='email'>
                                <i class="fa-solid fa-envelope"></i>
                                <span>seotrangbh24@gmail.com</span>
                            </div>
                        </div>
                        <div className={[styles.headTop,styles.headTopRight,'df_sb'].join(" ")}>
                            <div>
                                <span>Hệ thống cửa hàng</span>
                            </div>
                            <div className={[styles.country,' '].join(" ")}>
                                <span>Việt Nam</span>
                                <img src={flag2} alt="VN" className='flag'/>
                            </div>
                            <div className={styles.help}>
                                <i class="fa-solid fa-info"></i>
                                <span>Cần hỗ trợ?</span>
                            </div>
                            
                        </div>
                </div>        
            </div>
            <div className={styles.myHeader}>
                
                <div className={[styles.headerChildMid].join(" ")}>
                    <Link to={'/'} className='logo'>
                        <img src={logo} alt="" />
                    </Link>
                    
                    <div className={styles.search}>
                
                        <input {...register('search')} placeholder={'Bạn tìm gì..'}/>

                       
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <ul className={[styles.categorys1].join(" ")}>
                        <li className={styles.navParent+" "+styles.navParentActive}>
                            <Link to={'/'}>Trang chủ </Link>
                            
                        </li>
                        <li className={styles.navParent}>
                            <Link to={'/products'}>
                                Điện thoại 
    
                            </Link>
                        </li>
                        <li className={styles.navParent}>
                            <Link to={'/products'}>
                                Tablet 
 
                            </Link>
                        </li>
                        <li className={styles.navParent}>
                            <Link to={'/products'}>
                                Phụ kiện 
                                <ul className={styles.navChild}>
                                    <li>Apple</li>
                                    <li>123</li>
                                    <li>Xiaomi</li>
                                    <li>Vivo</li>
                                    <li>Oppo</li>
                                    <li>Sony</li>
                                    <li>Realme</li>
                                </ul>
                            </Link>
                        </li>
                        <li className={styles.navParent}>
                            <Link to={'/products'}>
                                Smartwatch

                            </Link>
                        </li>
                        <li className={styles.navParent}>
                            <Link to={'/products'}>
                                Loa 

                            </Link>
                        </li>
                        <li className={styles.navParent}>
                            <Link to={'/products'}>Tivi </Link>
                            
                        </li>
                        <li className={styles.navParent}>
                            <Link to={'/products'}>Liên hệ </Link>
                           
                        </li>
                        {/* <li className={styles.navParent}>Scroll Top: {offset} 
                            <ul>
                        </ul>
                        </li> */}
                    </ul>

                    <div className={[styles.userAction,' df_sb'].join(" ")}>
                        <Link to={'/sign-in'} className={styles.user}>
                            <i class="fa-regular fa-user"></i>
                                <span className='userName'>
                                    Trá Ng
                                </span>

                            </Link>

                            <Link to={'/cart'} className={styles.cart}>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </Link>
                    </div>
                </div>
                <div className={[onScroll].join(" ")}>
                    <ul className={[styles.categorys].join(" ")}>
                        <li className={styles.navParent}>
                            Trang chủ 
                            <ul className={styles.navChild}>
                                <li>Apple  <i class="fa-solid fa-caret-right"></i></li>
                                <li>Samsung <i class="fa-solid fa-caret-right"></i></li>
                                <li>Xiaomi <i class="fa-solid fa-caret-right"></i></li>
                                <li>Vivo <i class="fa-solid fa-caret-right"></i></li>
                                <li>Oppo <i class="fa-solid fa-caret-right"></i></li>
                                <li>Sony <i class="fa-solid fa-caret-right"></i></li>
                                <li>Realme <i class="fa-solid fa-caret-right"></i></li>
                            </ul>
                        </li>
                        <li className={styles.navParent}>
                            Điện thoại 
                            <ul className={styles.navChild}>
                                <li>Apple</li>
                                <li>Samsung</li>
                                <li>Xiaomi</li>
                                <li>Vivo</li>
                                <li>Oppo</li>
                                <li>Sony</li>
                                <li>Realme</li>
                            </ul>
                        </li>
                        <li className={styles.navParent}>
                            Tablet 
                            <ul className={styles.navChild}>
                                <li>Apple</li>
                                <li>Samsung</li>
                                <li>Xiaomi</li>
                                <li>Vivo</li>
                                <li>Oppo</li>
                                <li>Sony</li>
                                <li>Realme</li>
                            </ul>
                        </li>
                        <li className={styles.navParent}>
                            Phụ kiện 
                            <ul className={styles.navChild}>
                                <li>Apple</li>
                                <li>Samsung</li>
                                <li>Xiaomi</li>
                                <li>Vivo</li>
                                <li>Oppo</li>
                                <li>Sony</li>
                                <li>Realme</li>
                            </ul>
                        </li>
                        <li className={styles.navParent}>
                            Đồng hồ 
                            <ul className={styles.navChild}>
                                <li>Apple</li>
                                <li>Samsung</li>
                                <li>Xiaomi</li>
                                <li>Vivo</li>
                                <li>Oppo</li>
                                <li>Sony</li>
                                <li>Realme</li>
                            </ul>
                        </li>
                        <li className={styles.navParent}>
                            Loa 
                            <ul className={styles.navChild}>
                                <li>Apple</li>
                                <li>123</li>
                                <li>Xiaomi</li>
                                <li>Vivo</li>
                                <li>Oppo</li>
                                <li>Sony</li>
                                <li>Realme</li>
                            </ul>
                        </li>
                        <li className={styles.navParent}>
                            Tin tức 
                            
                        </li>
                        <li className={styles.navParent}>
                            Liên hệ 
                           
                        </li>
                        {/* <li className={styles.navParent}>Scroll Top: {offset} 
                            <ul>
                        </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );  
};

export default Header;