import React, { useEffect, useState } from 'react';

import styles from './FormProductReceiving.module.scss'

import FormCommon from '../../commonAdmin/form/Common/FormCommon';
import FormCode from '../../commonAdmin/form/Common/FormCode';

import SelectCommon from '../../commonAdmin/form/Common/SelectCommon';
import FormArticle from '../../commonAdmin/form/Common/FormArticle';
import MyModal from '../../../modal/ClosableModal/Modal';
import { GetCode } from '../../../../util/GetCode';
import { set } from 'react-hook-form';
import SupplierAPI from '../../../../service/nodejsServer/SupplierAPI';
import CategoryAPI from '../../../../service/nodejsServer/CategoryAPI';



const FormProductReceiving = () => {

    // const productName = 'Áo thun Unisex';
    // const code = GetCode(productName);
    // console.log(code);

    // data get form

    const [productName,setProductName] = useState('');
    const [productNameDetail,setProductNameDetail] = useState('');
    const [productCode,setProductCode] = useState("");
    const [productCodeNameDetail,setProductCodeNameDetail] = useState("");
    const [supplier,setSupplier] = useState([]);
    const [category,setCategory] = useState('');
    

    // data load
    const [categories,setCategories] = useState([]);
    const [makers,setMakers] = useState([]);
    const [suppliers,setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);

    // state lưu trạng thái disable của thẻ select makers. khi chưa chọn danh mục thì sẽ không cho phép nhà sản xuất
    const [disableMakers,setDisableMakers] = useState(true);


    





    const handleProductName = (value)=>{
        setProductName(value);
    }
    const handleProductNameDetail = (value)=>{
        setProductNameDetail(value);
    }

    useEffect(()=>{

   
        const code = GetCode(productName);
        // console.log("code name : ",code);

        setProductCode(code);
        // console.log("product name : ",productName);

        // console.log("product code : ",productCode);


    },[productName]);

    useEffect(()=>{
   
        const code = GetCode(productNameDetail);
        // console.log("code name Detail: ",code);
        setProductCodeNameDetail(code);
        // console.log("product name Detail : ",productNameDetail);

        // console.log("product code : ",productCodeNameDetail);


    },[productNameDetail]);



    // get data 
    useEffect(()=>{
        async function fetchData() {
            let supplierDatas = await SupplierAPI.GetAll();
            // console.log("useEffect : ", supplierData);
            setSuppliers(supplierDatas);
        }
        fetchData();
        // let supplierData = await SupplierAPI.GetAll();
        // console.log(supplierData);
        // supplierData.then((result)=>{
        //     console.log(result);
        //     setSupplier(result);
        // })

        
    },[])

    // console.log(supplier);

    useEffect(()=>{
        // console.log(supplier);
    },[supplier])

    

    useEffect(()=>{
        
        console.log("product name : ",productName);
        console.log("product code : ",productCode);

        console.log("product name detail : ",productCodeNameDetail);
        console.log("product code name detail: ",productCodeNameDetail);


    },[productCode,productCodeNameDetail]);

    // categories data
    useEffect(()=>{
        // let dataCategories = null;
        async function fetchData(){
            let dataCategories = await CategoryAPI.getAllCategories();
            console.log("dataCategories : ", dataCategories);
            setCategories(dataCategories);
            setLoading(false);
            // dataCategories.then((value)=>{
            //     console.log("dataCategories : ", value);
            //     setCategories(value);
            // })

            // setCategories(dataCategories);
            
        }
        fetchData();
    },[])

    useEffect(()=>{
        console.log("categories : ",categories);
    },[categories])


    // xử lí category select
    const handleCategory = (value) => {
        // console.log("value ",value);
        setCategory(value);
    }

    
    // khi đã chọn category rồi thì sẽ enable thẻ select chọn nhà sản xuất 
    useEffect(()=>{

    },[category])
    

    return (
        <div className='mt2em'>
            {loading?<div>Loading.....</div>
            :
            
            <div id='formProductCommon' className={styles.formProductReceiving}>
                    <div className='form_df_2item mt1_5em'>
                        <section className='form_left'>
                            <SelectCommon onChange={handleCategory} data={categories} title="Danh mục" />
                        </section>
                        <section className='form_left'>
                            <SelectCommon disabled={disableMakers} data={supplier} title="Nhà sản xuất" />
                        </section>
                    </div>
                    <div className="form_df_2item mt1_5em">
                    <section className='form_left'>
                            <FormCommon onChange={handleProductName} title="Tên chung" id="productName" name="productName" placeholder="Tên sản phẩm" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                        </section>
                        <section className='form_left'>
                            <FormCode disabled={true} title="Mã sản phẩm" id="productCode" name="productCode" placeholder="Mã sản phẩm" type="Text" formValue={productCode} pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                        </section>
                    </div>
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <FormCommon onChange={handleProductNameDetail} title="Tên sản phẩm (duy nhất)" id="productNameDetail" name="productNameDetail" placeholder="Tên sản phẩm" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                        </section>
                        <section className='form_left'>
                            <FormCode disabled={true} title="Mã sản phẩm duy nhất" id="productCodeNameDetail" name="productCodeNameDetail" placeholder="Mã sản phẩm" type="Text" formValue={productCodeNameDetail} pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                        </section>
                    </div>
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <FormCommon title="Giá nhập" id="purchasePrice" name="purchasePrice" placeholder="Giá nhập..." type="number" pattern="^\d*$" />
                        </section>
                        <section className='form_left'>
                            <FormCommon title="Số lượng" id="quantity" name="quantity" placeholder="Số lượng" type="number" pattern='^\d*$' />
                        </section>
                    </div>
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            {/* <FormCommon title="Nhà cung cấp" id="supplier" name="supplier" placeholder="Nhà cung cấp" type="number" pattern="^\d*$" /> */}
                            <SelectCommon title="Nhà cung cấp" />
                        </section>
                        <section className='form_left'>
                            <FormCommon title="Mã lô hàng" id="quantity" name="quantity" placeholder="vd : LH23032023M01" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                        </section>
                    </div>

                    <div className="form_df_2item mt1_5em">
                        
                      
                            <section className='form_left'>

                                <FormCommon title="Phiên bản" id="version" name="version" placeholder="" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                            </section>
                            <section className='form_left'>

                                <FormCommon title="Màu sản phẩm" id="version" name="version" placeholder="" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                            </section>
                      
                    </div>
                    

                   

                    
                    
                    
                    <div className={styles.btnAction +" mt2em"}>
                        
                        <MyModal width={"47%"} height={"3em"} color={"#47535e"} heading={"Hủy thêm sản phẩm !"} content = {"Bạn chắc chắn muốn hủy thêm sản phẩm"} btnName = {"Hủy"}/>
                        <button className={styles.save}>
                            Thêm
                        </button>
                        
                    </div>
                </div>
            }
        </div>
    );
};

export default FormProductReceiving;