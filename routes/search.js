const express = require('express');
const router = express.Router();
const authController = require('../controllers/search')
const userCheck = require('../controllers/checkLog')

router.get('songs/search',userCheck.check, (req,res)=>{
        res.render('loggedSongs');
})
router.post('/search', authController.search)

module.exports = router;