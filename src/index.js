const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const postsRoutes = require('./routes/posts.routes')
const app = express()

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(postsRoutes)


app.listen(4000)

console.log('server on port 4000')
