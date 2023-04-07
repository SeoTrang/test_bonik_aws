import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import MyModal from '../../../modal/ClosableModal/Modal';


import styles from './ProductsManage.module.scss'

const ProductPage = () => {
  const [sortOrder, setSortOrder] = useState('asc'); // State lưu trữ thứ tự sắp xếp, mặc định là 'asc'
  
  const data = [
    { id: 1, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'Điện thoại iPhone 14 Pro Max 128GB', count: 1 , category:"Điện thoại",price:"28.490.000₫",sold:512,review:4},
    { id: 2, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'Samsung Galaxy Watch5 40mm dây silicone', count: 3 ,category:"SmartWatch",price:"28.490.000₫",sold:512,review:3},
    { id: 3, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'MacBook Air M1 2020 7-core GPU', count:2 ,category:"Máy tính",price:"28.490.000₫",sold:512,review:5},
    { id: 3, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'MacBook Air M1 2020 7-core GPU', count:2 ,category:"Máy tính",price:"28.490.000₫",sold:512,review:5},
    { id: 3, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'MacBook Air M1 2020 7-core GPU', count:2 ,category:"Máy tính",price:"28.490.000₫",sold:512,review:5},
    { id: 3, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'MacBook Air M1 2020 7-core GPU', count:2 ,category:"Máy tính",price:"28.490.000₫",sold:512,review:5},
    { id: 3, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'MacBook Air M1 2020 7-core GPU', count:2 ,category:"Máy tính",price:"28.490.000₫",sold:512,review:5},
    { id: 3, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'MacBook Air M1 2020 7-core GPU', count:2 ,category:"Máy tính",price:"28.490.000₫",sold:512,review:5},
    { id: 3, "img": 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-200x200.jpg', name: 'MacBook Air M1 2020 7-core GPU', count:2 ,category:"Máy tính",price:"28.490.000₫",sold:512,review:5},
  ];

  // Hàm sắp xếp dữ liệu theo trường và thứ tự cho trước
  const sortData = (field, order) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortedData;
  };

  const [sortedData, setSortedData] = useState(sortData('name', sortOrder)); // State lưu trữ dữ liệu đã được sắp xếp, mặc định sắp xếp theo trường lastName và thứ tự 'asc'


  // Hàm xử lý khi click vào tiêu đề của cột
  const handleSort = (field) => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    setSortedData(sortData(field, newOrder));
  };

  
  return (
    <div className={styles.listProducts +" mt1em"}>
      
        
        <div className={styles.tableHead +" mt2em"}>
          <div className={styles.tableRow}>
            <div>STT</div>
            <div onClick={() => handleSort('img')}>Ảnh</div>
            <div onClick={() => handleSort('name')}>Tên</div>
            <div onClick={() => handleSort('count')}>Số lượng</div>
            <div onClick={() => handleSort('category')}>Danh mục</div>
            <div onClick={() => handleSort('price')}>Giá bán</div>
            <div onClick={() => handleSort('sold')}>Đã bán</div>
            <div onClick={() => handleSort('review')}>Đánh giá</div>
            <div>Hành động</div>

            
          </div>
        </div>
        <div className={styles.tableBody}>
          {sortedData.map((item,index) => (
            <div key={index} className={styles.tableRow}>
              <div>{index+1}</div>
              <div><img src={item.img} alt="" /></div>
              <div>{item.name}</div>
              <div>{item.count}</div>
              <div>{item.category}</div>
              <div>{item.price}</div>
              <div>{item.sold}</div>
          
              <div>
                
                {[...Array(item.review)].map((_, index) => (
                  <i key={index} class="fa-solid fa-star"></i>
                ))}

                {[...Array(5-item.review)].map((_, index) => (
                  <i key={index} class="fa-regular fa-star"></i>
                ))}

                
              </div>
              <div className={styles.btnActionProduct}>
                <Button className={styles.btnEdit}><Link to={'/admin/product-manager?cate=dien-thoai&id=1'}>
                  <i class="fa-solid fa-pen-to-square"></i>
                  <span>Sửa</span>
                
                </Link></Button>
                <MyModal width={"40%"} color="#dc3545" heading = {"Xóa điện thoại "+item.name} content={"Bạn chắc chắn muốn xóa điện thoại "+item.name +" ?"} btnName="Xóa"/>
              </div>
             
            </div>
          ))}
        </div>

    </div>
  );
};

export default ProductPage;