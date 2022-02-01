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
exports.contact = (req,res)=>{

    const {name,email,message} = req.body

            db.query('INSERT INTO contacts SET ? ',{name: name, email: email, message: message}, (err,results)=>{
                if (err) {
                    console.log(err);
                }
                res.redirect('../contact')
            })    
}