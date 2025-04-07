const { login } = require('../controller/controller')
const express = require('express')
const router = express.Router()

router.get('/', login)

module.exports = router


