import React, { useEffect, useState } from 'react';

import styles from './FormProductReceiving.module.scss'


import SelectCommon from '../../commonAdmin/form/Common/SelectCommon';

import CategoryAPI from '../../../../service/nodejsServer/CategoryAPI';



const FormProductReceiving = () => {

    // const productName = 'Áo thun Unisex';
    // const code = GetCode(productName);
    // console.log(code);


    
    const [categories,setCategories] = useState([]);
    const [makers,setMakers] = useState([]);



  
    // categories state 
    useEffect(()=>{
        // let dataCategories = null;
        async function fetchData(){
            let dataCategories = await CategoryAPI.getAllCategories();
            console.log("dataCategories : ", dataCategories);
            setCategories(dataCategories);
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

    return (
        <div className='mt2em'>
            <div id='formProductCommon' className={styles.formProductReceiving}>
                    <div className='form_df_2item mt1_5em'>
                        <section className='form_left'>
                            <SelectCommon  data={categories} title="Danh mục" />
                        </section>
                        <section className='form_left'>
                            <SelectCommon data={supplier} title="Nhà sản xuất" />
                        </section>
                    </div>

                </div>
        </div>
    );
};

export default FormProductReceiving;