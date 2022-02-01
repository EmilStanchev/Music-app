const express = require('express');
const router = express.Router();
const path = require('path')
const authController = require('../controllers/imageUpload')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null, './public/savedImages')
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
router.post('/imageSaved', upload.single("image"),authController.saveImage)
module.exports = router;
