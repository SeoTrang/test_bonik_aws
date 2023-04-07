const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize(
   'test',
   'root',
   '',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');

}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Book = sequelize.define("books", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   author: {
     type: DataTypes.STRING,
     allowNull: false
   },
   release_date: {
     type: DataTypes.DATEONLY,
   },
   subject: {
     type: DataTypes.INTEGER,
   }
});

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


const sinh_viens = sequelize.define("sinh_viens", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey:true
    },
    ten: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tuoi: {
      type: DataTypes.INTEGER,
    },
    diachi: {
      type: DataTypes.STRING,
    }
 });

 sequelize.sync().then(() => {
    console.log('sinh_vien table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 
    Book.create({
        title: "Ma seo tráng",
        author: "lào cai",
        release_date: "2021-12-14",
        subject: 3
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

sequelize.sync().then(() => {

    Book.findAll().then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});


// sequelize.sync().then(() => {

//     sinh_viens.findAll().then(res => {
//         console.log(res)
//     }).catch((error) => {
//         console.error('Failed to retrieve data : ', error);
//     });

// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });