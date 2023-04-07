import React, { createContext, useEffect, useState } from 'react';

import Header from '../../../common/admin/header/Header';
import TitleTop from '../../../common/admin/titleTop/TitleTop';
import LineColumnArea from '../../../components/admin/chart/lineColumnArea/LineColumnArea';
import CategoriesParents from '../../../components/admin/commonAdmin/categories/CategoriesParents';

import Pie from '../../../components/admin/chart/Pie/Pie'
import styles from './CategoryPage.module.scss'
import ListCategories from '../../../components/admin/commonAdmin/categories/ListCategories';
import ListCategory from '../../../components/admin/commonAdmin/categories/ListCategory';
import ModalForm from '../../../components/modal/ClosableModal/ModalForm';
import FormCommon from '../../../components/admin/commonAdmin/form/Common/FormCommon';
import FormImages from '../../../components/admin/commonAdmin/form/Common/FormImages';
import Spline from '../../../components/admin/chart/Spline/Spline';
import MakerAIP from '../../../service/nodejsServer/MakerAPI';
import { useParams } from 'react-router-dom';


export const MakerDataContext = createContext({});

const CategoryPage = () => {
    let { id } = useParams();
    const [file, setFile] = useState(null);
    const [nameMaker,setNameMaker] = useState('')
    const [disabledSummit,setDisabledSummit] = useState(true)
    const [makerDataAddedAndUpdated, setMakerDataAddedAndUpdated] = useState(false);

    const [makerData,setMakerData] = useState([])
    
    

    const handleNameMaker = (value)=>{
        setNameMaker(value);
        // console.log("nameMaker : ",value);
    }

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
        // console.log(selectedFile);
    };

    const handleSubmitFormAddMaker = ()=>{
        
        if(nameMaker&&file){
            try {
                console.log("submit");
                MakerAIP.add(nameMaker,id,file)
                .then(response=>{
                    console.log("response : ",response);
                    setMakerDataAddedAndUpdated(!makerDataAddedAndUpdated);
                })
                .catch(error=>{
                    console.log("error : ",error);
                })
            } catch (error) {
                
            }
        }
    }


    useEffect(()=>{
        async function fetchData(){
            let makerDataAPI = await MakerAIP.GetMakersId(id);
            console.log("goi api --");
            setMakerData(makerDataAPI);
        }
        fetchData();
    },[makerDataAddedAndUpdated])

    useEffect(()=>{
        if(nameMaker && file){
            setDisabledSummit(false);
            
        }
    },[nameMaker,file])



    return (
        
            <div className='category'>
            <div className='mt2em'>
                
                {/* url={productsUrl} */}
                <div className='titleTop'>
                        <TitleTop titleLeft={{title:"Quản lí danh mục hãng sản xuất",icon:"fa-solid fa-square-plus"}} titleRight={{title:"Quay về trang quản lí danh mục"}}/>
                    </div>

                    
                
                <div className={styles.topCateGories+" "+styles.box + " mt2em"}   >
                    <h4 className={styles.title}>
                        Top hãng sản phẩm bán chạy nhất
                    </h4>
                    <Spline lineNumber={3}/>
                </div>

                

                <div className='df_sb mt2em ' >
                    <div className={styles.listCategory+" "+styles.box }>
                        <h4 className={styles.title}>
                            Hãng sản xuất
                        </h4>
                        {/* <div>{makerDataAddedAndUpdated?"true":"false"}</div> */}
                        <MakerDataContext.Provider  value={ {makerData,setMakerData, makerDataAddedAndUpdated, setMakerDataAddedAndUpdated } }>
                            <ListCategory/>
                        </MakerDataContext.Provider>
                    </div>
                    
                    <div className={styles.topRevenue+" "+styles.box}>
                        <h4 className={styles.title}>
                            Top đầu số lượng
                        </h4>
                        <Pie/>
                    </div>
                </div>

                <div className='addNewMaker mt2em'>
                    <ModalForm 

                            icon={'fa-solid fa-plus'} 
                            content={<div className="formImg">
                                <FormCommon title="Tên nhà sản xuất" onChange={handleNameMaker} id="makerName" name="makerName" placeholder="Nhập tên nhà sản xuất ..." type="Text" pattern='' />
                                <FormImages title="Ảnh đại diện" file={file} onChange={handleFileChange}/> 
                            </div>} 
                            width={"100%"}
                            disabled={disabledSummit}
                            height={'2.5em'}
                            color="#06c180"
                            heading = {"Thêm nhà sản xuất  ?"} 
                            btnName="Thêm nhà sản xuất mới" 
                            btnAcceptName="Thêm"
                            Submit={handleSubmitFormAddMaker}/>
                </div>
            </div>
        </div>
        
    );
};

export default CategoryPage;