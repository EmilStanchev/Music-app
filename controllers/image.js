const mysql = require('mysql');
const { json } = require('body-parser');
const userSpecify = require('../controllers/login-controller')
const userCheck = require('../controllers/checkLog')

const multer  = require('multer')
const upload = multer({ dest: '../public/Images' })
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music'
})
 db.connect((err) =>{
 if(err){ console.log(err);}
})
exports.image = (req,res)=>{

    if (userCheck) {
        userSpecify.image
    }
}