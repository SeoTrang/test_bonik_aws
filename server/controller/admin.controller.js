
const {SupplierModel} = require('../model/Suppliers');
const Categories = require('../model/Categories');
const {MakerModel} = require('../model/Makers');


const convertToSlug = require('../util/convertToSlug');

const adminController = {

    home:async(req,res,next)=>{
        res.json("hello admin controller");
    },


    GetAllSuppliers:async(req,res,next)=>{
        try {
            const allSuppliers = await SupplierModel.getAll();
            res.json(allSuppliers);
        } catch (error) {
            console.log(error);
        }
    },


    // ================categories==========
    GetAllCategories:async(req,res,next)=>{
        try {
            const categories = await Categories.findAll();
            res.json(categories);
        } catch (error) {
            
        }
    },



    // ==============maker===============
    AddNewMaker:async(req,res,next)=>{
        try {

            console.log(req.body);
            //const image = req.file.filename; // lấy tên file từ req

            
            const name = await req.body.name;
            const categoryId = await req.body.categoryId;
            const makerSlug = await convertToSlug.convert(req.body.name);
            const img = await req.body.img;


            // console.log(req.body);
            
            
            await MakerModel.insert(makerSlug,name,img,categoryId);
            res.status(200).json('successfully');
            
        } catch (error) {
            res.status(500).json('fail');
        }
    },

    GetAllMakers:async(req,res,next)=>{
        try {
            const makersData = await MakerModel.GetAll();
            res.json(makersData);
        } catch (error) {
            res.status(500).json('fail');
        }
    },

    GetMakersId:async(req,res,next)=>{
        try {
            const id = req.params['id'];
            console.log("id : ",id);
            const makersData = await MakerModel.GetMakersId(id);
            res.json(makersData);
        } catch (error) {
            res.status(500).json('fail');
        }
    }
}

module.exports = adminController;