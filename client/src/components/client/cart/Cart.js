import React from 'react';

import styles from './Cart.module.scss'
import TimeLine from './TimeLine';
const Cart = ({ FormActive,ReviewActive,children}) => {
 
    return (
        <div className='contentApp'>
            
            <div className={styles.cart}>
                <div className='route'>
                    <i class="fa-solid fa-house"></i>
                    <span>Trang chủ / Giỏ hàng</span>
                </div>
                
                <div className='containerCart'>
                        <TimeLine  FormActive={FormActive} ReviewActive={ReviewActive}/>

                    <div className='boxCart'>
                        {children}
                    </div>
                </div>

    

                
            </div>
        </div>
    );
};

export default Cart;