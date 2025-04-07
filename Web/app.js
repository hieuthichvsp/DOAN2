require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const viewEjs = require('./src/config/viewEjs')
const connectDB = require('./src/config/connectDB')
const webRoutes = require('./src/routes/web')

viewEjs(app)
// use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', webRoutes)
// connect to database
connectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})