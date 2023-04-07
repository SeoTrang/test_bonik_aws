import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.scss'
import logo from './logo.svg';
import Avatar from './avatar_default.jpg';

function Sidebar() {
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
          <li className={styles.menuActive}>
            <Link>
              <i class="fa-solid fa-gauge-high"></i>
            <span>Trang chủ</span>
            
            

            </Link>            
            </li>
          <li>
            <Link>
              <i class="fa-solid fa-mobile-retro"></i>
            <span>Xem sản phẩm</span>

            </Link>
          </li>
         

          <li>
            <Link to={'/warehouse/product-receiving'}>
            <i class="fa-solid fa-warehouse"></i>
            <span>Nhập kho</span>
            </Link>

          </li>

          <li>
            <Link>
            <i class="fa-solid fa-file-export"></i>
            <span>Xuất kho</span>
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