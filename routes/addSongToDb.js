const express = require('express');
const router = express.Router();
const authController = require('../controllers/addSongToDb')
router.get('/', (req,res)=>{
    res.render('index')
})
router.post('/added', authController.add)
module.exports = router;