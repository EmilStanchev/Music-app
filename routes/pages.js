const express = require('express')
const req = require('express/lib/request')
const adminCheck = require('../controllers/adminLogin')
const userSpecify = require('../controllers/login-controller')
const updatedInfo = require('../controllers/imageUpload')
const userCheck = require('../controllers/checkLog')
const song = require('../controllers/songsController')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/songs',(req,res)=>{
    res.render('songs')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/success/contact',userCheck.check,(req,res)=>{
    res.render('contact')
})
router.get('/success/logged',userCheck.check,(req,res)=>{
    res.render('welcome')
})

router.get('/success/',userCheck.check,(req,res)=>{
    res.send('welcome')
})
router.get('/success/songs',userCheck.check,(req,res)=>{

    res.render('loggedSongs',{
        name: song.name,
        author: song.author,
        info:song.info
    })
})
router.get('/admin/',(req,res)=>{
    res.render('adminRegister')
})
/*router.get('upload/profile/',(req,res)=>{
    res.render('profile',{})
})*/
router.get('/success/profile',userCheck.check,(req,res)=>{
    res.render('profile',{
        Name: userSpecify.name,
        Email: userSpecify.email,
        About: userSpecify.about,
        Genre: userSpecify.genre,
        Image: userSpecify.image
    })
})

router.get('/success/editProfile',userCheck.check,(req,res)=>{
    res.render('editProfile',{
        Name: userSpecify.name,
        Email: userSpecify.email,
        About: userSpecify.about,
        Genre: userSpecify.genre,
        Image: userSpecify.image

    })
})

module.exports = router