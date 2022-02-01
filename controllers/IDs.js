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
 exports.database = db
db.query('SELECT id FROM songs',(err,results)=>{
    if (err) {
        console.log(err);
    }
    exports.songs = results.length
})
/*Admin number */
db.query('SELECT id FROM users WHERE role="admin"',(err,results)=>{
    if (err) {
        console.log(err);
    }
    exports.adminsNumbers = results.length
})

db.query('SELECT id FROM users WHERE role="user"',(err,results)=>{
    if (err) {
        console.log(err);
    }
    exports.usersNumber = results.length
})
