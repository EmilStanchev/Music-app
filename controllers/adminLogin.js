const mysql = require('mysql');
const { json } = require('body-parser');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const songId = require('./IDs')
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

exports.admin = (req,res)=>{
    console.log(req.body);
    const {name,password} = req.body;
    db.query
    db.query('SELECT * FROM users WHERE name=?',[name,password], async (err,results)=>{
        if (err) {
            console.log(err);
            next()
        }
       else if (results.length<1 ||results[0].role!='admin' ||!bcrypt.compareSync(password,results[0].password)){
           res.send('U dont have permission buddy')

        }
        else if(results && results[0].role=='admin'&& bcrypt.compareSync(password,results[0].password)){
          
            console.log('Admin is logged in system');
            console.log(results[0].email);
            console.log(songId.songs);
            res.render('adminDashboard',{
                Admins: songId.adminsNumbers,
                Users: songId.usersNumber,
                Songs: songId.songs,
                Email: results[0].email,
                Image:results[0].image,
            })
            exports.Id= results[0].id
        }
    })
}