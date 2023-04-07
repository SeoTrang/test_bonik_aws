import React from 'react';

import axios from 'axios';

const phiVanChuyenGiaoHangNhanh ={
    getFeeShiping:async(insurance_value,from_district_id,to_district_id,to_ward_code,height,length,weight,width)=>{
        try {
            let fee = null;
            await axios.get('https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee', {
                headers: {
                    token: 'f720853f-be21-11ed-bcba-eac62dba9bd9',
                    shop_id:3884747
                },
                params: { 
                    "service_id":53321, // int - ID của gói dịch vụ mà bạn chọn
                    "insurance_value":500000, //int - giá trị của sản phẩn. GHN căn cứ vào giá trị này để tính tiền bảo hiểm cho hàng hóa.
                    "coupon": null, //String - Mã giảm giá của GHN. Nếu không có, để rỗng: "" hoặc null
                    "from_district_id":1542, //int - ID Quận/Huyện người gửi
                    "to_district_id":1444, //int - ID Quận/Huyện người nhận
                    "to_ward_code":"20314", //String - ID Phường/ Xã người nhận
                    "height":15, //Chiều cao (cm)
                    "length":15, //int - Chiều dài (cm)
                    "weight":1000,//int - trọng lượng hàng hóa (gram)
                    "width":15 //Chiều rộng (cm)
                }
            })
            .then(function (response) {
                // console.log("phuong xa : ",response);
                fee = response.data.data;
                
            })
                .catch(function (error) {
                console.log(error);
            });

            return fee;
        } catch (error) {
            
        }
    }
};

export default phiVanChuyenGiaoHangNhanh;