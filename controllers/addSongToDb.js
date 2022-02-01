const mysql = require('mysql');
const { json } = require('body-parser');
const dotenv = require('dotenv');
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
exports.add = (req,res)=>{
    console.log(req.body);
    const {title,author, lyrics} =req.body
    db.query('INSERT INTO songs SET ?',{title: title,author:author, lyrics:lyrics},(err,results)=>{
        if (err) {
            console.log(err);
        }
        return res.redirect('adminDashboard')
    })
    db.query('SELECT * FROM songs WHERE title=?',[title],(err,results)=>{
        if (err) {
            console.log(err);
        }
    })
}
