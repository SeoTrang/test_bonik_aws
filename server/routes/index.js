
const client = require('./client')
const admin = require('./admin')

const route = (app)=>{
    app.use('/admin',admin);
    app.use('/',client);

}

module.exports = route;