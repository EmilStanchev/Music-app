const express = require('express')
const req = require('express/lib/request')
const userSpecify = require('../controllers/login-controller')
const userCheck = require('../controllers/checkLog')
const adminCheck = require('../controllers/checkAdminLog')

const router = express.Router()
router.get('/admin/adminAddSongs',(req,res)=>{
    res.render('adminAddSongs')
})

router.get('/admin/allUsers',adminCheck.check,(req,res)=>{
    res.render('allUsers')
})

router.get('/admin/allAdmins',adminCheck.check,(req,res)=>{
    res.render('allAdmins')
})

router.get('/logged/adminDashboard',adminCheck.check,(req,res)=>{
    res.render('adminDashboard')
})
module.exports = router