const connectDB = require('../config/connectDB')

const login = (req, res) => {
    res.render('login')
}
module.exports = {
    login
}