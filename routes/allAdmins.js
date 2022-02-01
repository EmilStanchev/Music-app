const express = require('express');
const router = express.Router();
const authController = require('../controllers/allAdmins')
const adminCheck = require('../controllers/checkAdminLog')

router.get('/', (req,res)=>{
    res.render('index');
})
router.post('/admins', authController.adminCheck)
module.exports = router;