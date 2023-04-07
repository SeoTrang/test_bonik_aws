import SideBar from "../common/admin/salesPerson/SideBar";


const SalesPerson = ({ children }) => {
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

export default SalesPerson;