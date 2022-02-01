const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const userSpecify = require('../controllers/login-controller')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music'
})
 db.connect((err) =>{
 if(err){ console.log(err);}
})
exports.check = (req,res,next)=>{
        if (userSpecify.Id) {
            next()
        }else{
            res.render('login')
        }
}