import React from 'react';
import Cart from '../../../components/client/cart/Cart';
import FormCart from '../../../components/client/cart/FormCart'

const FormCartPage = () => {
    return (
        <>
            <Cart  FormActive = {true} ReviewActive = {false}><FormCart/></Cart>
        </>
    );
};

export default FormCartPage;