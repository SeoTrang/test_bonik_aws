import axios from "axios";
import aws from "../s3/uploadTos3";



const MakerAIP = {
    add:async(name,categoryId,img)=>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('categoryId', categoryId);
        const test = await aws.upLoadToS3(img);
        
        // console.log("url : " + test);

        // formData.append('img', test);

        const params= {
          name:name,
          categoryId:categoryId,
          img:test
        }



        return axios.post('http://localhost:4000/admin/add-new-maker', params)
          .then(function (response) {
            console.log(response);
            return response;
          })
          .catch(function (error) {
            console.log(error);
            return error;
          });
    },

  GetAll:async()=>{
    let makersData = null;
    await axios.get('http://localhost:4000/admin/get-all-makers')
    .then(function(response){
      makersData = response.data;
    })
    .catch(function(error){
      console.log(error);
    })

    return makersData;
  },
  GetMakersId:async(id)=>{
    let makersData = null;
    await axios.get(`http://localhost:4000/admin/get-makers/${id}`,{
      params: {
        id: id
      }
    })
    .then(function(response){
      console.log(response);
      makersData = response.data;
    })
    .catch(function(error){
      console.log(error);
    })
    return makersData;
  }
}


export default MakerAIP;