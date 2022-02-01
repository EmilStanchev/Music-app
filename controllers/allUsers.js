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
exports.userCheck = (req,res)=>{
    const {name} = req.body
    db.query('SELECT * FROM users WHERE name=?',[name],async (err,results)=>{
        if (err) {
            console.log(err);
        }else if(results.length<1){
        res.send('Wrong user`s name')
    }else if(results[0].role=="admin"&& results.length>0){
        res.send('You picked admin')
    }
    else if(results[0].role=="user"&& results.length>0){
        res.render('userInformation',{
            Name: results[0].name,
            Password: results[0].password,
            Email:results[0].email,
            Role:results[0].role,
            About:results[0].about,
            Genre:results[0].genre
        })
    }
    })


}