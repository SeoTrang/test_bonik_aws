import React from "react";

import SideBar from "../common/admin/warehouseStaff/SideBar";


const WarehouseStaff = ({ children }) => {
    return (
      <div className="admin">
        <div className="sideBar">
            <SideBar/>
            
        </div>
        
        <div className="adContentApp">
            {children}
        </div>
      
      </div>
    );
};

export default WarehouseStaff;