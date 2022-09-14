const {Client} = require('pg')
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password:"13379706",
    database:"postgres",

})

module.exports=client;