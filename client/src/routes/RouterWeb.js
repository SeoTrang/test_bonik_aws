import React from 'react';

import {
    Route,
    Routes
  } from "react-router-dom";


import HomePage from '../pages/client/HomePage';
import Products from '../components/client/products/Products';
import DetailPage from '../pages/client/DetailPage';
import CartPage from '../pages/client/cartPages/CartPage';
import FormCartPage from '../pages/client/cartPages/FormCartPage';
import ReviewCartPage from '../pages/client/cartPages/ReviewCartPage';
import AdHomePage from '../pages/admin/AdHomePage';
import ClientLayout from '../layout/ClientLayout'
import AdminLayout from '../layout/AdminLayout';
import SalesPerson from '../layout/salesPerson';
import WarehouseStaff from '../layout/warehouseStaff';
import ProductPage from '../pages/commonManage/product/ProductPage';
import AddAndUpdateProductPage from '../pages/commonManage/product/AddAndUpdateProductPage';
import ProductReceiving from '../pages/wareHouseStaff/ProductReceiving';
import CategoriesPage from '../pages/commonManage/categories/CategoriesPage';
import CategoryPage from '../pages/commonManage/categories/CategoryPage';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';




const RouterWeb = () => {
    return (
      <Routes>
        {/* ========================================>>>>>>>>client<<<<<<<<<<<<<<<<================================ */}
        <Route path='/' element={                   <ClientLayout>      <HomePage/>         </ClientLayout>}/>   
        <Route path='/products' element={           <ClientLayout>       <Products />       </ClientLayout>}/>     
        <Route path='/detail' element={             <ClientLayout>       <DetailPage />     </ClientLayout>}/>   
        <Route path='/cart' element={               <ClientLayout>       <CartPage />       </ClientLayout>}/>
        <Route path='/form-cart' element={          <ClientLayout>       <FormCartPage />   </ClientLayout>}/>
        <Route path='/review-cart' element={        <ClientLayout>       <ReviewCartPage /> </ClientLayout>}/>

       
    
        {/* ========================================>>>>>>>>admin<<<<<<<<<<<<<<<<================================ */}
        {/* valueMenu : lưa trạng thái của menu sidebar . */}
  
        <Route path="/admin" element={              <AdminLayout valueMenu = {1}>       <AdHomePage />      </AdminLayout>} />
        <Route path="/admin/products" element={      <AdminLayout valueMenu = {2}>       <ProductPage />      </AdminLayout>} />
        <Route path="/admin/product-manager" element={<AdminLayout valueMenu = {2}>       <AddAndUpdateProductPage />      </AdminLayout>} />


        {/*category*/}
        <Route path="/admin/categories" element={<AdminLayout valueMenu = {3}>       <CategoriesPage />      </AdminLayout>} />
        <Route path="/admin/category/:id" element={<AdminLayout valueMenu = {3}>       <CategoryPage />      </AdminLayout>} />
        {/* <Route path="/admin/product-manager/:id" element={<AdminLayout valueMenu = {2}>       <AddAndUpdateProductPage />      </AdminLayout>} />
        
         */}

        {/* ===================================salesPerson========================== */}
        <Route path="/sales-person" element={              <SalesPerson>       <AdHomePage />      </SalesPerson>} />
        <Route path="/sales-person/products" element={              <SalesPerson>       <ProductPage />      </SalesPerson>} />
        <Route path="/sales-person/product-manager" element={              <SalesPerson>       <AddAndUpdateProductPage />      </SalesPerson>} />
        



        {/* ===================================salesPerson========================== */}
        <Route path="/warehouse" element={              <WarehouseStaff>       <AdHomePage />      </WarehouseStaff>} />
        <Route path="/warehouse/product-receiving" element={              <WarehouseStaff>       <ProductReceiving />      </WarehouseStaff>} />
        

        //supplier
        
        
         {/* ==================auth */}
         
         <Route path='/sign-in' element={<SignIn/>}/>
         <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>

    );
  };
  
  export default RouterWeb;