const express = require('express');
const router = express.Router();
const authController = require('../controllers/adminLogin')
router.get('/', (req,res)=>{
    res.render('index')
})
router.post('/logged', authController.admin)
module.exports = router;