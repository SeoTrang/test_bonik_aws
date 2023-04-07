import React from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import FormCommon from '../../components/admin/commonAdmin/form/Common/FormCommon';

import styles from './authStyles.module.scss';

import logo from './logo.svg'
const SignIn = () => {

    let navigate = useNavigate();
    const Redirect = () =>{
        // return redirect('/');
        return navigate('/');
    }

    return (
        
        <div className={styles.boxAuth}>
            <div className={styles.content}>
            <div className={styles.authTop}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.authTitle}>
                    <div className={styles.title}>
                        <h3>Chào mừng bạn đến với Bonik</h3>
                    </div>
                    <div className={styles.description}>
                        <span>Đăng nhập với email & mật khẩu</span>
                    </div>
                </div>
            </div>

            <div className={styles.formAuth}>
                <div className={styles.form}>

                    <FormCommon required={true} title="Email hoặc số điện thoại " id="phoneAndEmail" name="phoneAndEmail"  type="Text"  pattern="(\w+@\w+\.\w+)|(\d{9,10})" />
                </div>
                <div className={styles.form}>

                    <FormCommon required={true} title="Mật khẩu " id="password" name="password"  type="password"  pattern="" />
                </div>
            </div>

            <div className={styles.formAction}>
                <div className={styles.btnSignIn}>
                    <button onClick={Redirect}>Đăng nhập</button>
                </div>
                <div className={styles.lineOr}>
                    <div className={styles.line}></div>
                    <div className={styles.or}>Hoặc</div>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.btnSignInGoogle}>
                    <button>Đăng nhập bằng Google</button>
                </div>
                <div className={styles.btnSignInFacebook}>
                    <button>Đăng nhập bằng Facebook</button>
                </div>


            </div>

            <div className={styles.authBottom}>
                <div className={styles.signUp}>
                    <span>Không có tài khoản?<Link to="/sign-up">Đăng ký ngay</Link></span>
                </div>
                <div className={styles.forgotPassword}>
                    <span>Quên mật khẩu của bạn?<Link>Lấy lại</Link></span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignIn;