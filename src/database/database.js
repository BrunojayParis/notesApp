import  Sequelize  from 'sequelize';

// Sequelize('database', 'user', 'password')
export const sequelize = new Sequelize('postgres', 'postgres', 'Casla', {
    host: 'localhost',
    dialect: 'postgres'
});

