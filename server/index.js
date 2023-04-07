const express = require('express');
const app = express()
const path = require('path')
var cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan');

const db = require('./config/db');
const  route  = require('./routes/index.js');

// static file
app.use("/",express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // parse req.body
// app.use(express.static('public'))

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// parse application/json
app.use(bodyParser.json())

app.use(cors(corsOptions));

app.use(morgan('combined'))

db.checkConnect;
route(app)

app.listen(4000,()=>{
    console.log("app running at http://localhost:4000/");
})