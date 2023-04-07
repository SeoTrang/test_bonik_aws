import React, { useContext, useEffect, useState } from 'react';

import earphone from './photo/tainghe.jpg'
import laptop from './photo/laptop.jpg'
import phone from './photo/phone.jpg'
import smartwatch from './photo/smartwatch.jpg'
import { Link } from 'react-router-dom';
import GetUrl from '../../../../config/GetUrl';
import styles from './ListCategory.module.scss'
import MyModal from '../../../modal/ClosableModal/Modal';
import Button from 'react-bootstrap/esm/Button';
import ModalForm from '../../../modal/ClosableModal/ModalForm';
import FormCommon from '../form/Common/FormCommon';
import FormImages from '../form/Common/FormImages';

import { MakerDataContext } from '../../../../pages/commonManage/categories/CategoryPage';

const ListCategory = () => {

    const {makerData,setMakerData, makerDataAddedAndUpdated, setMakerDataAddedAndUpdated } = useContext(MakerDataContext);
    const currentUrl = window.location.href;
    const [editCategory,seteditCategory] = useState('');
    const [file, setFile] = useState(null);

    console.log("makerData con : ", makerData);

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
    };
    useEffect(()=>{
        if(currentUrl.includes('sales-person')){
            seteditCategory(GetUrl.salesPerson.category);
        }else if( currentUrl.includes('admin')){
            seteditCategory(GetUrl.admin.category);
        }else{
            seteditCategory(GetUrl.warehouse.category)
        }
    })

    return (
        <div className={styles.listCategory}>
            <div>
            <div className={styles.title}>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <span>Hình ảnh</span>
                    </div>
                    <div className={styles.categoryName}>
                        <span>Tên</span>
                    </div>
                    <div className={styles.quatityProducts}>
                        <span>Số sản phẩm</span>
                    </div>
                    <div className={styles.sold}>
                        <span>
                            Đã bán
                        </span>
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

                    makerData.map((value,index)=>{
                        return(
                            <div key={index} className={styles.item}>
                                <div className={styles.img}>
                                    <img src={value.img} alt="" />
                                </div>
                                <div className={styles.categoryName}>
                                    <span>{value.name}</span>
                                </div>
                                
                                <div className={styles.quatityProducts}>
                                    <span>320</span>
                                </div>
                                <div className={styles.sold}>
                                    <span>
                                        15
                                    </span>
                                </div>

                                <div className={styles.action}>
                                    <Button className={styles.btnEdit}><Link to={''}>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <span>Sửa</span>
                                    
                                    </Link></Button>
                                    <MyModal width={"40%"} color="#dc3545" heading = {"Xóa điện thoại  ?"} btnName="Xóa"/>
                                    
                                </div>
                            </div>
                        )
                    })
                }
               {/* <div className={styles.item}>
                    <div className={styles.img}>
                        <img src={smartwatch} alt="" />
                    </div>
                    <div className={styles.categoryName}>
                        <span>Điện thoại</span>
                    </div>
                    
                    <div className={styles.quatityProducts}>
                        <span>320</span>
                    </div>
                    <div className={styles.sold}>
                        <span>
                            15
                        </span>
                    </div>

                    <div className={styles.action}>
                        
                        <ModalForm 
                            icon={'fa-solid fa-pen-to-square'} 
                            content={<div className="formImg">
                                <FormCommon title="Tên nhà sản xuất" id="makerName" name="makerName" placeholder="Nhập tên nhà sản xuất ..." type="Text" pattern='' />
                                <FormImages title="Ảnh đại diện" file={file} onChange={handleFileChange}/> 
                            </div>} 
                            width={"40%"} color="#06c180" 
                            heading = {"Sửa nhà sản xuất  ?"} 
                            btnName="Sửa" 
                            btnAcceptName={"sửa"}
                            action={'update'}/>
                        <MyModal 
                            width={"40%"} 
                            
                            color="#dc3545" 
                            heading = {"Xóa điện thoại  ?"} 
                            btnName="Xóa"/>
                            
                        
                    </div>
                </div> */}
                
                
            </div>
            </div>
        </div>
    );
};

export default ListCategory;