import SideBar from "../common/admin/admin/SideBar";


const AdminLayout = ({ valueMenu,children }) => {
    return (
      <div className="admin">
        <div className="sideBar">
            <SideBar value={valueMenu}/>
            
        </div>
        
        <div className="adContentApp">
            {children}
        </div>
      
      </div>
    );
};

export default AdminLayout;