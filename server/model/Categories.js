


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

const Categories = sequelize.define("categories", {
  id:{
    type:DataTypes.INTEGER,
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
//   // console.log('Categories table created successfully!');

//   Categories.bulkCreate(
//     [
//       { 
        
//         slug: "dien-thoai",
//         name: "Điện thoại",
//         img:"http://localhost:4000/img/dien_thoai.jpg"

//     },
//     {
//       slug:"laptop",
//       name:"Laptop",
//       img:"http://localhost:4000/img/laptop.jpg"
//     },
//     {
//       slug:"smart-wacth",
//       name:"SmartWacth",
//       img:"http://localhost:4000/img/dong_ho.jpg"
//     },
//     {
//       slug:"tai-nghe",
//       name:"Tai nghe",
//       img:"http://localhost:4000/img/tai_nghe.jpg"
//     }
//   ]
//   ).then(res => {
//       console.log(res)
//   }).catch((error) => {
//       console.error('Failed to create a new record : ', error);
//   });

// }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });


module.exports = Categories;

