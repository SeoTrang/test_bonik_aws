import React, { useState } from "react";
import AWS from "aws-sdk";

const S3_BUCKET = "your_bucket_name";
const REGION = "your_aws_region";
const ACCESS_KEY = "your_aws_access_key";
const SECRET_ACCESS_KEY = "your_aws_secret_access_key";

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
});

const s3 = new AWS.S3();

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgURL, setImgURL] = useState("");

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const params = {
      Bucket: S3_BUCKET,
      Key: selectedFile.name,
      Body: selectedFile,
      ACL: "public-read",
    };

    s3.upload(params, function (err, data) {
      if (err) {
        console.log("Error uploading image: ", err);
      } else {
        console.log("Successfully uploaded image to S3");

        setImgURL(data.Location);
      }
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={handleUpload}>Upload</button>
      {imgURL && <img src={imgURL} alt="uploaded image" />}
    </div>
  );
}

export default App;