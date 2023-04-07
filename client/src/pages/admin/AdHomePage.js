import React from 'react';
import Form from 'react-bootstrap/Form';

import styles from './AdHomePage.module.scss'

import Header from '../../common/admin/header/Header';
import BarChart from '../../components/admin/chart/barChart/BarChart';
import LineColumnArea from '../../components/admin/chart/lineColumnArea/LineColumnArea';
import Overview from '../../components/admin/chart/overview/Overview';


import Pie from '../../components/admin/chart/Pie/Pie'
import Spline from '../../components/admin/chart/Spline/Spline';
import TitleTop from '../../common/admin/titleTop/TitleTop';

const AdHomePage = () => {
    return (
        <div className='adHomePage'>
            <Header/>

            <div className='titleTop mt2em'>
                <TitleTop titleLeft={{title:"Trang chủ",icon:"fa-solid fa-gauge-high"}} titleRight={false}/>
            </div>
            <div className='Overview'>
                <Overview/>
            </div>
            
            <div className='df_sb mt2em' >
                <div className={styles.topCateGories}>
                    <div className={styles.title}>
                        Top danh mục bán chạy
                    </div>
                    <LineColumnArea/>
                </div>
                
                <div className={styles.topRevenue}>
                    <div className={styles.title}>
                        Top đầu doanh thu
                    </div>
                    <Pie/>
                </div>
            </div>
            {/* <BarChart/> */}
            
            <div className={styles.totalProductCategories + " mt2em"}>
                <div className={styles.title}>
                    Tổng số sản phẩm theo danh mục
                </div>
                <BarChart/>
            </div>

            <div className={styles.revenue + " mt2em"}>
                <div className={styles.title}>
                    Thống kê doanh thu
                </div>

                <div className={styles.filter + " mt1em mb1em"}>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Theo năm</option>
                        <option value="2">Theo quý</option>
                        <option value="3">Theo tháng</option>

                    </Form.Select>
                </div>

                <Spline/>
            </div>

        </div>
    );
};

export default AdHomePage;