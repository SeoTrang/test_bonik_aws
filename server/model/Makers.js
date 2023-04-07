const { DataTypes, where } = require('sequelize');
const sequelize = require('../config/db');
const Categories = require('./Categories');

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

const Makers = sequelize.define("makers", {
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
    },
    categoryId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'categories',
            key:'id'
        }
    }
  
});

Makers.belongsTo(Categories, { foreignKey: 'categoryId' });//phương thức belongsTo để định nghĩa quan hệ "Makers thuộc về một Category"
Categories.hasMany(Makers, { foreignKey: 'categoryId' }); //phương thức hasMany để định nghĩa quan hệ "Một Category có nhiều Makers".




sequelize.sync().then(() => {
    console.log('Makers table created successfully!');
  
    
  
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });
  


const MakerModel = {
    insert:async(slug,name,img,categoryId)=>{
        try {
            sequelize.sync().then(() => {
                // console.log('Categories table created successfully!');
              
                Makers.create(
                  {
                      slug:slug,
                      name:name,
                      img:img,
                      categoryId:categoryId
                  },{
                    logging: console.log, // log ra các câu lệnh SQL được thực thi
                    benchmark: true // log thời gian thực thi của câu lệnh SQL
                  }
                  
                ).then(res => {
                    console.log("==========================================================================================================================maker model");
                    console.log(res)
                }).catch((error) => {
                    console.error('Failed to create a new record : ', error);
                });
              
              }).catch((error) => {
                console.error('Unable to create table : ', error);
              });
        } catch (error) {
            console.log(error);
        }
    },


    GetAll:async()=>{
        try {
            const makersData = await Makers.findAll();
            return makersData;
        } catch (error) {
            console.log(error);
        }
    },

    GetMakersId:async(id)=>{
        try {
            const makersData = await Makers.findAll(
                {
                    where:{
                        categoryId:id
                    }
                }
            );
            return makersData;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = {
    MakerModel,
    Makers
};



