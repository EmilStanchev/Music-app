const express = require('express');
const router = express.Router();
const authController = require('../controllers/allUsers')

router.get('/', (req,res)=>{
    res.render('index');
})
router.post('/users', authController.userCheck)
module.exports = router;