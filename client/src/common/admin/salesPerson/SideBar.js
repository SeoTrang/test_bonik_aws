import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.scss'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* Phần 1: Logo */}
      <div className={styles.sidebarLogo}>
        <img src="./img/logo.svg" alt="Logo" />
      </div>
      
      {/* Phần 2: Avatar và tên người dùng */}
      <div className={styles.sidebarUser}>
        <img src="./img/avatar_default.jpg" alt="Avatar" />
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
            <Link to={'/sales-person/products'}>
              <i class="fa-solid fa-mobile-retro"></i>
            <span>Quản lí sản phẩm</span>

            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-syringe"></i>
              <span>Quản lí danh mục</span>

            </Link>
          </li>
          
          <li>
            <Link>
              <i class="fa-solid fa-users"></i>
              <span>Quản lí người dùng</span>

            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-cart-shopping"></i>
              <span>Quản lí đơn đặt hàng</span>
            </Link>

          </li>

          <li>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;