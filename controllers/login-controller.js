const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { json } = require('body-parser');
const query = require('express/lib/middleware/query');
const path = require('path')
const html = require('./songsController')
dotenv.config();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music'
})
 db.connect((err) =>{
 if(err){ console.log(err);}
})

exports.login =  (req,res) =>{
    let a = db.query('SELECT name FROM users WHERE id = id')
console.log(a);
    console.log(req.body);
    const {name,password,email} = req.body;
    db.query('SELECT * FROM users WHERE name=? ', [name,password], async (err,results)=>{
     /*   let a = bcrypt.compareSync(password,results[0].password)*/
        console.log(JSON.stringify(results));
         if (err) {
            console.log(err);
        }
          else if (results.length<1 || !bcrypt.compareSync(password,results[0].password)) {
            console.log('Danger: The user write invalid user or password ');
            res.render('login',{
                message: 'Wrong username or password'
            })
            }
            else if(bcrypt.compareSync(password,results[0].password)&& results.length>0){
             db.query('SELECT * FROM users WHERE name=?',[name, email], async (err,results)=>{
                 console.log(results[0].id);
                 exports.Id = {}
                    if (err) {
                        console.log(err);
                    }
                    else if(results[0].role == 'user'){
                        res.set({
                            'Id': results[0].id
                        })
                       res.render('welcome',{
                        Name:name,
                        email: email,
                        id: results[0].id
                    })
                    exports.Id= results[0].id
                    exports.name= results[0].name
                    exports.email = results[0].email
                    exports.about = results[0].about
                    exports.genre = results[0].genre
                    exports.image = results[0].image
                    console.log(results[0].image);
                }else if(results[0].role=='admin'){
                    res.render('adminDashboard')
                }
                })
            }
        })
}