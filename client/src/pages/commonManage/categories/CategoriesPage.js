import React, { createContext, useEffect, useState } from 'react';

import Header from '../../../common/admin/header/Header';
import TitleTop from '../../../common/admin/titleTop/TitleTop';
import LineColumnArea from '../../../components/admin/chart/lineColumnArea/LineColumnArea';
import CategoriesParents from '../../../components/admin/commonAdmin/categories/CategoriesParents';

import Pie from '../../../components/admin/chart/Pie/Pie'
import styles from './CategoriesPage.module.scss'
import ListCategories from '../../../components/admin/commonAdmin/categories/ListCategories';
import GetUrl from '../../../config/GetUrl';
import CategoryAPI from '../../../service/nodejsServer/CategoryAPI';



// Create context for categories
export const CategoriesContext = createContext([]);

const CategoriesPage = () => {

    const [categories,setCategories] = useState([]);

    useEffect(()=>{

        async function fetchData(){
            let categoriesData = await CategoryAPI.getAllCategories();
            console.log("categories data : ", categoriesData);
            setCategories(categoriesData);
        }

        fetchData();
    },[])
    
    return (
        <CategoriesContext.Provider value={categories}>
            <div className='categoriesPage'>
            <Header/>

            <div className='titleTop mt2em'>
                {/*  url={productManagerUrl} */}
                <TitleTop titleLeft={{title:"Quản lí danh mục",icon:"fa-solid fa-gauge-high"}}/>
            </div>

            <div className='mt2em'>
                <div>
                    <CategoriesParents/>
                </div>
                
                <div className={styles.topCateGories+" "+styles.box + " mt2em"}>
                    <h4 className={styles.title}>
                        Top danh mục bán chạy nhất
                    </h4>
                    <LineColumnArea/>
                </div>

                

                <div className='df_sb mt2em ' >
                    <div className={styles.listCategories+" "+styles.box }>
                        <h4 className={styles.title}>
                            Danh mục hệ thống
                        </h4>
                        <ListCategories/>
                        
                    </div>
                    
                    <div className={styles.topRevenue+" "+styles.box}>
                        <h4 className={styles.title}>
                            Top đầu số lượng
                        </h4>
                        <Pie/>
                    </div>
                </div>
            </div>
        </div>
        </CategoriesContext.Provider>

    );
};

export default CategoriesPage;