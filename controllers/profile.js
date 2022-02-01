const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const { json } = require('body-parser');
const userSpecify = require('../controllers/login-controller');
const fs = require('fs');
const path = require('path');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music'
})
 db.connect((err) =>{
 if(err){ console.log(err);}
})

exports.editProfile=  (req,res)=>{
    const {about,name,email,genre,image} = req.body;
        db.query("UPDATE users SET ? WHERE  id=" + mysql.escape(userSpecify.Id),{about: about,name:name,genre:genre,email:email,image:image},async (err,results)=>{
            if (err) {
                console.log(err);
            }
            res.render('profile',{
              message: 'Changes were saved',
            })
        })
}
