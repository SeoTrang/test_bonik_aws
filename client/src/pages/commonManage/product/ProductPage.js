import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import styles from './ProductPage.module.scss'

import Header from '../../../common/admin/header/Header';
import TitleTop from '../../../common/admin/titleTop/TitleTop';
import BarChart from '../../../components/admin/chart/barChart/BarChart';
import ProductsManage from '../../../components/admin/commonAdmin/product/ProductsManage';
import LineColumnArea from '../../../components/admin/chart/lineColumnArea/LineColumnArea';
import FlashData from '../../../components/client/flashSale/FlashData';
import ProductCard from '../../../components/client/products/ProductCard'
import GetUrl from '../../../config/GetUrl';


const ProductPage = () => {
    const currentUrl = window.location.href;
    console.log(currentUrl);

    const [productManagerUrl,setProductManagerUrl] = useState('');

    

    useEffect(()=>{
        if(currentUrl.includes('sales-person')){
            setProductManagerUrl(GetUrl.salesPerson.productManager);
        }else if( currentUrl.includes('admin')){
            setProductManagerUrl(GetUrl.admin.productManager);
        }else{
            setProductManagerUrl(GetUrl.warehouse.productManager)
        }
    })

    return (
        <div className='adHomePage'>
            <Header/>

            <div className='titleTop mt2em'>
                <TitleTop titleLeft={{title:"Quản lí sản phẩm",icon:"fa-solid fa-gauge-high"}} titleRight={{title:"Thêm sản phẩm mới"}} url={productManagerUrl}/>
            </div>

            <div className={styles.listProducts+ ' mt2em'}>
                <div className={styles.productsTitle}>
                        <h4 className={styles.title}>
                            Danh sách sản phẩm 
                        </h4>

                        <div className={styles.filter}>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Tất cả</option>
                                <option value="1">Điện thoại</option>
                                <option value="2">Máy tính</option>
                                <option value="3">SmartWatch</option>

                            </Form.Select>
                        </div>
                    </div>
                <ProductsManage/>
            
            </div>

            <div className={styles.totalProducts + " mt2em"}>
                <h4 className={""}>
                    Tổng số sản phẩm theo danh mục
                </h4>
                <BarChart/>
            </div>

            

            <div className={styles.topCateGories + " mt2em"}>
                    <h4 className={styles.title}>
                        Top sản phẩm bán chạy
                    </h4>
                    <LineColumnArea/>
            </div>

            <div className='mt2em boxProducts'>
                <div className='productsTitle'>
                    <h4 className={styles.title}>
                        Danh sách sản phẩm bán chạy
                    </h4>

                    
                </div>
                <div className={styles.boxProducts}>
                    {FlashData.FlashData.map((value,index)=>{
                        return(

                            <ProductCard key={index} data = {value}/>
                        )
                    })}
                </div>
            </div>


        </div>
    );
};

export default ProductPage;