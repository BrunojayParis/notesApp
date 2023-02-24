import  Sequelize  from 'sequelize';

export const sequelize = new Sequelize('postgres', 'postgres', 'Casla', {
    host: 'localhost',
    dialect: 'postgres'
});



// const {Pool} = require('pg')

// const pool = new Pool({
//     user:'postgres',
//     password:'Casla',
//     host: 'localhost',
//     port:5432,
//     database:'postgres'
// })


