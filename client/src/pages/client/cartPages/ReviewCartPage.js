import React from 'react';
import Cart from '../../../components/client/cart/Cart';
import ReviewCart from '../../../components/client/cart/ReviewCart';

const ReviewCartPage = () => {
    return (
        <>
            <Cart  FormActive = {true} ReviewActive = {true}><ReviewCart/></Cart>
        </>
    );
};

export default ReviewCartPage;