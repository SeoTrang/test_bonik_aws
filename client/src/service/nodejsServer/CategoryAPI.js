import axios from "axios"

const CategoryAPI = {
    getAllCategories:async()=>{
        let categories = null;
        await axios.get('http://localhost:4000/admin/get-all-categories')
        .then(function(response){
            // console.log(response.data);
            categories = response.data;
        })
        .catch(function(error){
            console.log(error);
        })

        return categories;
    }
}

export default CategoryAPI;