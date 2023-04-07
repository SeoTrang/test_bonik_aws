import React,{ useState,useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import styles from './FormCart.module.scss'

import QuantityPrice from './QuantityPrice';
import giaoHangNhanhAddress from '../../../service/giaoHangNhanh/giaoHangNhanhAddress';
import phiVanChuyenGiaoHangNhanh from '../../../service/giaoHangNhanh/phiVanChuyenGiaoHangNhanh';

const FormCart = () => {

    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWards, setSelectedWards] = useState('');


    const [dataProvince, setdataProvince] = useState([]);
    const [dataDistrict, setdataDistrict] = useState([]);
    const [dataWards, setdataWards] = useState([]);
    const [feeShiping, setFeeShiping] = useState(0);

    
    // let dataProvince = [];

    

    const handleChangeProvince = (event) => {
        setSelectedProvince(event.target.value);
    }
    const handleChangeDistrict = (event) => {
        setSelectedDistrict(event.target.value);
    }
    const handleChangeWards = (event) => {
        setSelectedWards(event.target.value);
    }


    // console.log("da chon tinh : ",selectedProvince);
    // console.log("da chon huyen : ",selectedDistrict);
    // console.log("da chon xa : ",selectedWards);

    //get Province addr
    useEffect(() => {
        try {
            let Province = giaoHangNhanhAddress.getProvince();

                Province.then(function(result) {
                // Do something with the array result here
                // console.log(result); // In ra mảng được trả về từ Promise
                setdataProvince(result);
            
                // và cứ tiếp tục cho đến phần tử cuối cùng trong mảng
                });
        } catch (error) {
            console.log(error);
        }
        // getAddr();
    },[]);

    // get District addr
    useEffect(() => {
        try {
            if(selectedProvince){
                let District = giaoHangNhanhAddress.getDistrict(selectedProvince);
                District.then(function(result){
                    // console.log(result);
                    setdataDistrict(result);
                })
                
            }
        } catch (error) {
            console.log(error);
        }
    },[selectedProvince]);


    //get Wards addr
    useEffect(() => {
        console.log("select : ",selectedProvince);
        if(selectedProvince !== '' && selectedDistrict !== ''){
           try {
                let Wards =  giaoHangNhanhAddress.getWards(selectedDistrict);
                console.log(Wards);
                Wards.then(function(result){
                    // console.log(result);
                    setdataWards(result);
                })
           } catch (error) {
            // setdataWards([]);
            console.log(error);
           }
        }
    },[selectedProvince,selectedDistrict]);


    //get fee
    useEffect(()=>{
        try {
            if(selectedProvince && selectedDistrict && selectedWards){
                let fee = phiVanChuyenGiaoHangNhanh.getFeeShiping();
                // console.log(fee);
                fee.then(function(result){
                    setFeeShiping(result)
                    console.log(feeShiping);
                })
            }
        } catch (error) {
            console.log(error);
        }
    },[selectedDistrict,selectedProvince,selectedWards])

    // getAddr();

    return (
        <div className={styles.formCart}>
            <div className={styles.form}>
                <div className={styles.containerForm}>
                    <div className={styles.title}>
                        Thông tin nhận hàng
                    </div>

                    <div className={styles.contentForm}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Địa chỉ email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Họ và tên (<span className={styles.star}>*</span>)</Form.Label>
                                <Form.Control type="text" placeholder="Họ và tên ..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Số điện thoại (<span className={styles.star}>*</span>)</Form.Label>
                                <Form.Control type="number" placeholder="Số điện thoại ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Địa chỉ (<span className={styles.option}>Tùy chọn</span>)</Form.Label>
                                <Form.Control type="text" placeholder="Địa chỉ ...." />
                            </Form.Group>

                            <div className={styles.addr}>

                                <div className='province'>
                                    <label htmlFor='province'>Tỉnh thành (<span className={styles.star}>*</span>)</label>
                                    <select value={selectedProvince} onChange={handleChangeProvince} id='province'>
                                        <option value="0">-----</option>
                                        {dataProvince.map((value,index)=>{
                                            return(

                                                <option key={index} value={value.ProvinceID}>{value.ProvinceName}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className='District'>
                                    <label htmlFor='District'>Quận Huyện (<span className={styles.star}>*</span>)</label>
                                    <select value={selectedDistrict} onChange={handleChangeDistrict} id='District'>
                                        <option value="0">-----</option>
                                        {dataDistrict.map((value,index)=>{
                                            return(

                                                <option key={index} value={value.DistrictID}>{value.DistrictName}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className='wards'>
                                    <label htmlFor='wards'>Phường Xã (<span className={styles.star}>*</span>)</label>
                                    <select value={selectedWards} onChange={handleChangeWards} id='wards'>
                                        <option value="0">-----</option>
                                        {dataWards.map((value,index)=>{
                                            return(

                                                <option key={index} value={value.WardCode}>{value.WardName}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>

                            <Form.Group className={"mb-3 " +styles.note} controlId="formGroupPassword">
                                <Form.Label>Ghi chú (<span className={styles.option}>Tùy chọn</span>)</Form.Label>
                                <Form.Control type="text" placeholder="Ghi chú..." />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>

            <div className={styles.userAction}>
                <QuantityPrice btnBack={{title:'Quay lại giỏ hàng',url:'/cart'}} btnNext={{title:'Đi tới đặt hàng',url:'/review-cart'}} feeShiping={feeShiping.total}/>
            </div>
        </div>
    );
};

export default FormCart;