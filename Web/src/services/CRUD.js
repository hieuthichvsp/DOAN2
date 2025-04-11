const db = require('../models/index')

const getAllUsers = async () => {
    const users = await db.User.findAll()
    return users;
}

moudle.exports = {
    getAllUsers
}