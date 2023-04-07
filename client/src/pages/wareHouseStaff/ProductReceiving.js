import React from 'react';



import Header from '../../common/admin/header/Header';

import TitleTop from '../../common/admin/titleTop/TitleTop';
import FormProductReceiving from '../../components/admin/warehouse/productReceiving/FormProductReceiving';


const ProductReceiving = () => {
    
    return (
        <div className='adHomePage'>
            <Header/>

            <div className='titleTop mt2em'>
                <TitleTop titleLeft={{title:"Nhập kho",icon:"fa-solid fa-gauge-high"}} titleRight={false}/>
            </div>
            
            <div className='productReceiving'>
                <FormProductReceiving/>
            </div>
            

        </div>
    );
};

export default ProductReceiving;