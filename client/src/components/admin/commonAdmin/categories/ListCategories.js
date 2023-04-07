import React, { useContext, useEffect, useState } from 'react';

import styles from './ListCategories.module.scss'

import earphone from './photo/tainghe.jpg'
import laptop from './photo/laptop.jpg'
import phone from './photo/phone.jpg'
import smartwatch from './photo/smartwatch.jpg'
import { Link } from 'react-router-dom';
import GetUrl from '../../../../config/GetUrl';

import { CategoriesContext } from '../../../../pages/commonManage/categories/CategoriesPage';

const ListCategories = () => {

    const categoriesData = useContext(CategoriesContext);
    console.log(categoriesData);

    const currentUrl = window.location.href;
    const [categoryUrl,setCategoryUrl] = useState('');

    

    useEffect(()=>{
        if(currentUrl.includes('sales-person')){
            setCategoryUrl(GetUrl.salesPerson.category);
        }else if( currentUrl.includes('admin')){
            setCategoryUrl(GetUrl.admin.category);
        }else{
            setCategoryUrl(GetUrl.warehouse.category)
        }
    })

    return (
        <div className={styles.listCategories}>
            <div>
            <div className={styles.title}>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <span>Hình ảnh</span>
                    </div>
                    <div className={styles.categoryName}>
                        <span>Tên</span>
                    </div>
                    <div className={styles.categoriesChild}>
                        <span>
                            Danh mục con
                        </span>
                    </div>
                    <div className={styles.quatityProducts}>
                        <span>Số sản phẩm</span>
                    </div>

                    <div className={styles.action}>
                        <div>
                            <span>Hành động</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.boxCategories}>
                
                {

                    categoriesData.map((value,index)=>{
                        return (
                            <div className={styles.item} key={index}>
                                <div className={styles.img}>
                                    <img src={value.img} alt="" />
                                </div>
                                <div className={styles.categoryName}>
                                    <span>{value.name}</span>
                                </div>
                                <div className={styles.categoriesChild}>
                                    <span>
                                        15
                                    </span>
                                </div>
                                <div className={styles.quatityProducts}>
                                    <span>320</span>
                                </div>

                                <div className={styles.action}>
                                    <Link to={categoryUrl+''+value.id+'?slug='+value.slug} className={styles.btnAction}>
                                    <i class="fa-solid fa-eye"></i>
                                    <span>Xem</span>

                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    );
};

export default ListCategories;