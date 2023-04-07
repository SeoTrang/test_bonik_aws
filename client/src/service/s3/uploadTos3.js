import AWS from "aws-sdk";
// require('dotenv').config();



const aws = {
    upLoadToS3 : async (file) =>{
        const S3_BUCKET = "bonik-test";
        const REGION = "ap-southeast-1";
        const ACCESS_KEY = "AKIAQNF3SSOTHUFPKZGM";
        const SECRET_ACCESS_KEY = "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";
        let imgUrl = null;
    
        AWS.config.update({
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_ACCESS_KEY,
            region: REGION,
        });
          
        const s3 = new AWS.S3();
        const params = {
            Bucket: S3_BUCKET,
            Key: "Images/"+ file.name,
            Body: file,
            ContentType: file.type,
            ACL: 'bucket-owner-full-control',
      
          };
    
          return new Promise((resolve, reject) => {
            s3.upload(params, function (err, data) {
              if (err) {
                console.log("Error uploading image: ", err);
                reject(err);
              } else {
                console.log("Successfully uploaded image to S3");
          
                imgUrl = data.Location;
                console.log("abc url : "+imgUrl);
                resolve(imgUrl);
              }
            });
          });
    
    
        
        // s3.upload(params, function (err, data) {
        //     if (err) {
        //       console.log("Error uploading image: ", err);
        //     } else {
        //       console.log("Successfully uploaded image to S3");
      
        //       setImgURL(data.Location);
        //     }
        //   });
    }
}

export default aws;