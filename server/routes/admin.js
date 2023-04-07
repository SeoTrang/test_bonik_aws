const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Thiết lập disk storage để đặt tên và lưu trữ file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/imgUpload'));//thu muc luu tru
    },
    filename: function (req, file, cb) {
      // Đặt tên file là tên gốc của file được tải lên
      cb(null, file.originalname)
    }
  });

// Tạo multer middleware để xử lý upload file
const upload = multer({ storage: storage });



const adminController = require('../controller/admin.controller');

router.get('/get-all-suppliers',adminController.GetAllSuppliers);
router.get('/get-all-categories',adminController.GetAllCategories);

//maker 
router.post('/add-new-maker',adminController.AddNewMaker);

router.get('/get-all-makers',adminController.GetAllMakers);          
router.get('/get-makers/:id',adminController.GetMakersId);          
                            

//home
router.get('/',adminController.home);

module.exports = router;

// add-new-maker


/*

const multer = require('multer');
const path = require('path');

// Thiết lập disk storage để đặt tên và lưu trữ file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // thư mục lưu trữ
  },
  filename: function (req, file, cb) {
    // Đặt tên file là tên gốc của file được tải lên
    cb(null, file.originalname)
  }
});

// Tạo multer middleware để xử lý upload file
const upload = multer({ storage: storage });

// Route để xử lý upload file
app.post('/upload', upload.single('image'), function(req, res) {
  res.send('File uploaded successfully');
});

 */