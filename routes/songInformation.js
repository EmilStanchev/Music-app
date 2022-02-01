const express = require('express');
const router = express.Router();
const authController = require('../controllers/songsInformation')
router.get('/', (req,res)=>{
    res.render('index')
})
router.post('/songInformation', authController.songInfo)
module.exports = router;