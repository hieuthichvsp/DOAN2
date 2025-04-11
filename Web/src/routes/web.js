const { login, adminDashboard, userManagement } = require('../controller/controller')
const express = require('express')
const router = express.Router()

router.get('/', login)
router.get('/admin/dashboard', adminDashboard)
router.get('/admin/usermanagement', userManagement)



module.exports = router


