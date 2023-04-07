import { SHA256 } from 'crypto-js';



const productName = 'Áo thun Unisex';

const GetCode = (value)=>{
    const hash = SHA256(value).toString();
    const code = hash.slice(0, 6); // Lấy 6 ký tự đầu tiên của mã hash
    return code.toUpperCase(); // Chuyển đổi thành chữ in hoa để đảm bảo tính duy nhất
}


export {
    GetCode

} 