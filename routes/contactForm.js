const express = require('express');
const router = express.Router();
const authControllerLogin = require('../controllers/contactForm')
router.get('success/login/', (req,res)=>{
        res.render('welcome');
})
router.post('/sended', authControllerLogin.contact)

module.exports = router;