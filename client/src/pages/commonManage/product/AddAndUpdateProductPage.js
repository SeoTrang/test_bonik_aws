import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";

//FormLaptopPC

import TitleTop from '../../../common/admin/titleTop/TitleTop';
import FormLaptop from '../../../components/admin/commonAdmin/form/formLaptop/FormLaptop';
import FormMobilePhone from '../../../components/admin/commonAdmin/form/formMobilePhone/FormMobilePhone';
import FormSmartWatch from '../../../components/admin/commonAdmin/form/formSmartWatch/FormSmartWatch';
import UnClosableModal from '../../../components/modal/unClosableModal/UnClosableModal';
import GetUrl from '../../../config/GetUrl';


const AddAndUpdateProductPage = () => {
    const location = useLocation();
    const currentUrl = window.location.href;
    const cate = new URLSearchParams(location.search).get("cate");
    const id = new URLSearchParams(location.search).get("id");
    console.log(cate,id);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [productsUrl,setProductsUrl] = useState('');

    

    useEffect(()=>{
        if(currentUrl.includes('sales-person')){
            setProductsUrl(GetUrl.salesPerson.products);
        }else if( currentUrl.includes('admin')){
            setProductsUrl(GetUrl.admin.products);
        }else{
            setProductsUrl(GetUrl.warehouse.productManager)
        }
    })
    

    
    const handleSubmit = (data) => {
        setSelectedCategory(data)
        console.log(data); // xử lý dữ liệu tại đây
    };
    
    return (
        <div className='addNewProductPage'>
            {(!cate && !id) ? 
            
                <div>
                    <UnClosableModal category={handleSubmit}/>
                    <div className='titleTop'>
                        <TitleTop titleLeft={{title:"Thêm sản phẩm mới",icon:"fa-solid fa-square-plus"}} titleRight={{title:"Quay về trang sản phẩm"}} url={productsUrl}/>
                    </div>

                    <div className='addProductForm'>
                        
                        {selectedCategory==="dien-thoai" && <FormMobilePhone/>}
                        
                        {selectedCategory ==="laptop" && <FormLaptop/>}


                        {selectedCategory ==="smartwatch" && <FormSmartWatch/>}
                    </div>  
                </div>



                // 
                :


                <div>
                    <div className='titleTop'>
                        <TitleTop titleLeft={{title:"Thêm sản phẩm mới",icon:"fa-solid fa-square-plus"}} titleRight={{title:"Quay về trang sản phẩm"}} url='/admin/products'/>
                    </div>

                    <div className='addProductForm'>
                        
                        {cate==="dien-thoai" && <FormMobilePhone/>}
                        
                    </div>  
                </div>
            }
        </div>
    );
};

export default AddAndUpdateProductPage;