


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

const Products = sequelize.define("products", {
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
  },
  price:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  priceOld:{
    type:DataTypes.INTEGER,
    allowNull:true
  }
  
});

sequelize.sync().then(() => {
    console.log('produtcs table created successfully!');
  
    
  
  }).catch((error) => {
    console.error('produtcs to create table : ', error);
  });


module.exports = Products;

