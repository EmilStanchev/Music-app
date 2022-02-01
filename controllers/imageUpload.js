const mysql = require('mysql');
const { json } = require('body-parser');
const userSpecify = require('../controllers/login-controller');
const fs = require('fs');

const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null, '../public/Images')
  },
  filename: (req,file,cb)=>{
    console.log(file);
    cb(null, Date.now() +  path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music'
})
 db.connect((err) =>{
 if(err){ console.log(err);}
})

exports.saveImage=  (req,res)=>{
    console.log(req.body);
    const image = req.file.filename
    console.log(image);
        db.query("UPDATE users SET ? WHERE  id=" + mysql.escape(userSpecify.Id),{image:image},async (err,results)=>{
            if (err) {
                console.log(err);
            }
            db.query('SELECT * FROM users WHERE id=' +mysql.escape(userSpecify.Id),(err,results)=>{
              if (err) {
                console.log(err);
              }
            res.render('profile',{
              message: 'Changes were saved',  
              Name: results[0].name,
              Email: results[0].email,
              About: results[0].about,
              Genre: results[0].genre,
              Image: results[0].image
            })

            })
        })
}
