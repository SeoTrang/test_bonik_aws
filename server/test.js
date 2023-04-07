require('dotenv').config({ path: '.env' })

console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);