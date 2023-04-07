
import axios from 'axios';


const giaoHangNhanhAddress = {
    getProvince: async () => {
      let Province = null;
      await axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
            headers: {
                token: 'f720853f-be21-11ed-bcba-eac62dba9bd9'
            }
        })
        .then(function (response) {
            // console.log("quan huyen : ",response);
            Province = response.data.data;
        })
            .catch(function (error) {
            console.log(error);
        });
      return Province;
    },
    getDistrict:async(selectedProvince)=>{
        let District = null;
        await axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/district', {
            headers: {
                token: 'f720853f-be21-11ed-bcba-eac62dba9bd9'
            },
            params: { 
                province_id : selectedProvince
            }
        })
        .then(function (response) {
            // console.log("quan huyen : ",response);
            District = response.data.data;
        })
            .catch(function (error) {
            console.log(error);
        });

        return District;
    },

    getWards:async(selectedDistrict)=>{
        let Wards = null;
        await axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/ward', {
            headers: {
                token: 'f720853f-be21-11ed-bcba-eac62dba9bd9'
            },
            params: { 
                district_id : selectedDistrict
            }
        })
        .then(function (response) {
            // console.log("phuong xa : ",response);
            Wards = response.data.data;
            
        })
            .catch(function (error) {
            console.log(error);
        });

        return Wards;
    }
  };
  
  export default giaoHangNhanhAddress;

  
        