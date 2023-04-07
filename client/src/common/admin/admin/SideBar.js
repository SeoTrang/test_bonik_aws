import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.scss'
import logo from './logo.svg';
import Avatar from './avatar_default.jpg';

function Sidebar({value}) {
  const [sidebarActive,setSidebarActive] = useState(value);

  function handleMenuClick(index){
    setSidebarActive(index);
  }

 

  return (
    <div className={styles.sidebar}>
      {/* Phần 1: Logo */}
      <div className={styles.sidebarLogo}>
        <img src={logo} alt="Logo" />
      </div>
      
      {/* Phần 2: Avatar và tên người dùng */}
      <div className={styles.sidebarUser}>
        <img src={Avatar} alt="Avatar" />
        <div className={styles.userName}>
          Ma Seo Tráng
        </div>
      </div>
      
      {/* Phần 3: List chức năng */}
      <div className={styles.sidebarMenu}>
        <ul>
          <li className={(sidebarActive === 1)? styles.menuActive:""} onClick={() => handleMenuClick(1)}>
            <Link to={'/admin'}>
              <i class="fa-solid fa-gauge-high"></i>
            <span>Trang chủ</span>
            
            

            </Link>            
            </li>
          <li  className={(sidebarActive === 2)? styles.menuActive:""} onClick={() => handleMenuClick(2)}>
            <Link to={'/admin/products'}>
              <i class="fa-solid fa-mobile-retro"></i>
            <span>Quản lí sản phẩm</span>

            </Link>
          </li>
          <li className={(sidebarActive === 3)? styles.menuActive:""} onClick={() => handleMenuClick(3)}>
            <Link to={'/admin/categories'}>
              <i class="fa-solid fa-syringe"></i>
              <span>Quản lí danh mục</span>

            </Link>
          </li>
          <li className={(sidebarActive === 4)? styles.menuActive:""} onClick={() => handleMenuClick(4)}>
            <Link>
              <i class="fa-solid fa-user-shield"></i>
            <span>Quản lí nhân viên</span>

            </Link>
          </li>
          <li className={(sidebarActive === 5)? styles.menuActive:""} onClick={() => handleMenuClick(5)}>
            <Link>
              <i class="fa-solid fa-users"></i>
            <span>Quản lí người dùng</span>

            </Link>
          </li>
          <li className={(sidebarActive === 6)? styles.menuActive:""} onClick={() => handleMenuClick(6)}>
            <Link>
              <i class="fa-solid fa-cart-shopping"></i>
            <span>Quản lí đơn đặt hàng</span>
            </Link>

          </li>

          <li className={(sidebarActive === 7)? styles.menuActive:""} onClick={() => handleMenuClick(7)}>
            <Link>
            <i class="fa-solid fa-warehouse"></i>
            <span>Quản lí kho</span>
            </Link>

          </li>

          <li className={(sidebarActive === 8)? styles.menuActive:""} onClick={() => handleMenuClick(8)}>
            <Link>
            <i class="fa-solid fa-boxes-packing"></i>
            <span>Quản lí nhà cung cấp</span>
            </Link>

          </li>

          <li>
            <Link>
            <i class="fa-solid fa-boxes-packing"></i>
            <span>Quản lí nhà cung cấp</span>
            </Link>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;