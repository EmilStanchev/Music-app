const express = require('express');
const router = express.Router();
const authController = require('../controllers/profile')
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null, '..public/Images')
  },
  filename: (req,file,cb)=>{
    console.log(file);
    cb(null, Date.now() +  path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})

router.get('/', (req,res)=>{
    res.render('index');
})
router.post('/saved',upload.single("image"),authController.editProfile)

module.exports = router;