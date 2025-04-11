const connectDB = require('../config/connectDB')
const { getAllUsers } = require('../services/CRUD')

const login = (req, res) => {
    res.render('auth/login')
}

const adminDashboard = (req, res) => {
    res.render('admin/adminDashboard')
}

const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsers()
        res.render('admin/userManagement', { users: users })
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error })
    }
}


module.exports = {
    login,
    adminDashboard,
    userManagement,
    getAllUsersController
}