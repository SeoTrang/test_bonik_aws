import React from 'react';
import Cart from '../../../components/client/cart/Cart';
import HomeCart from '../../../components/client/cart/HomeCart'

const CartPage = () => {
    return (
        <>
            <Cart  FormActive = {false} ReviewActive = {false}><HomeCart/></Cart> 
        </>
    );
};

export default CartPage;