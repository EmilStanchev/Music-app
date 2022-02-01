const express = require('express');
const router = express.Router();
const authController = require('../controllers/favoritesSongs')
//router.get('/', (req,res)=>{
//    res.render('index')
//})
router.post('/favorites', authController.favorites)
module.exports = router;