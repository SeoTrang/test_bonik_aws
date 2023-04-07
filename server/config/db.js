

const { Sequelize } = require('sequelize');
require('dotenv').config();


console.log('"'+process.env.DB_NAME+'"');
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);

const sequelize = new Sequelize(
  
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    
  }
);

// const sequelize = new Sequelize(
  
//   "bonik",
//   "root",
//   "",
//   {
//     dialect: 'mysql',
//     host: "192.168.1.86",
//     port: 3306,
    
//   }
// );

// const sequelize = require('../config/db');

// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');

// }).catch((error) => {
//   console.error('Unable to connect to the database: ', error);
// });

module.exports = sequelize;