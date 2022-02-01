const express = require('express');
const router = express.Router();
const authControllerLogin = require('../controllers/login-controller')

router.post('/logged', authControllerLogin.login)

module.exports = router;