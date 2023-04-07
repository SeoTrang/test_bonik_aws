import axios from "axios"

const SupplierAPI = {
    GetAll:async()=>{
            try {
                let supplier = null;
            await axios.get('http://localhost:4000/admin/get-all-suppliers')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                supplier = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

            // console.log(supplier);
            return supplier;
        } catch (error) {
            console.log(error);
        }
    }
}

export default SupplierAPI;