const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');

}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


const date = new Date();
const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const year = date.getFullYear().toString();
const formattedDate = `${day}-${month}-${year}`;

// console.log(formattedDate);

const Supplier = sequelize.define("suppliers", {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img:{
        type:DataTypes.STRING,
        allowNull:false
    }
  
});



// sequelize.sync().then(() => {
//     // console.log('Categories table created successfully!');
  
//     Supplier.bulkCreate(
//       [
//         { 
          
//           slug: "mai-hoang-mobile",
//           name: "Mai Hoàng Mobile",
//           img:'https://sanvieclamcantho.com/upload/imagelogo/cong-ty-co-phan-xay-dung-va-dau-tu-thuong-mai-hoang-ha-hoang-ha-mobile1676989949.jpg'
//       },
      
//       {
//         slug:"lam-phat-mobile",
//         name:"Lâm Phát Mobile",
//         img:"https://bizweb.dktcdn.net/100/445/498/themes/848649/assets/shoplist_brand_29_logo.png?1678429519124"
//       },
//       {
//         slug:"samsung",
//         name:"Samsung",
//         img:"https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$"
//       }
//     ]
//     ).then(res => {
//         console.log(res)
//     }).catch((error) => {
//         console.error('Failed to create a new record : ', error);
//     });
  
//   }).catch((error) => {
//     console.error('Unable to create table : ', error);
//   });


// sequelize.sync().then(() => {
//     console.log('Makers table created successfully!');
  
    
  
//   }).catch((error) => {
//     console.error('Unable to create table : ', error);
//   });
  


const SupplierModel = {
    getAll:async()=>{
        try {
            const suppliers = await Supplier.findAll();
            return suppliers;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = {
    SupplierModel,
    Supplier
};



