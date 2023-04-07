import Footer from "../common/client/Footer";
import Header from "../common/client/Header";

const ClientLayout = ({ children }) => {
    return (
      <div className="client">
        <Header/>
        {children}
        <Footer/>
      </div>
    );
};

export default ClientLayout;