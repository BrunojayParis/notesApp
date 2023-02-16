const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    password:'Casla',
    host: 'localhost',
    port:5432,
    database:'postsdb'
})

module.exports = pool