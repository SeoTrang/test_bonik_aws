import React,{ useState, useEffect } from 'react';

const Filter = ({category}) => {
    console.log(category);



    const [prices, setPrices] = useState([]); // gia
    const [colors, setColors] = useState([]); // mau sac
    const [brands, setBrands] = useState([]); // hang san xuat
    const [rams, setRams] = useState([]);       // ram
    const [oss, setOss] = useState([]);         // he dieu hanh
    const [demands, setDemands] = useState([]); // nhu cau su dung
    const [storages, setStorages] = useState([]);   // dung luong luu tru 
    const [batteries, setBatteriess] = useState([]); // pin 
    const [maxChargingPowers, setMaxChargingPower] = useState([]); // sac nhanh w
    // const [rechargeables, setRechargeables] = useState([]); // sac nhanh w

    // pin du phong 
    const [inputs, setInputs] = useState([]); // cong vao
    const [outputs, setOutputs] = useState([]); // cong ra
    const [categories, setCategories] = useState([]); // the loai
    const [features , setFeatures] = useState([]); // the loai







    return (
        <div className='filter'>
            
        </div>
    );
};

export default Filter;