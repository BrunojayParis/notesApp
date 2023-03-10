import {sequelize}  from './database/database.js'
import './models/posts.js'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

//Routes
import postsRoutes from './routes/posts.routes.js'

const app = express()

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(postsRoutes)


async function main() {

    try {
        app.listen(4000)
        console.log('server on port 4000')
        await sequelize.sync({force:false});//connect to database, {force:true} will drop the database and create a new one.
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();