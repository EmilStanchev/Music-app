const mysql = require('mysql');
const { json } = require('body-parser');
const dotenv = require('dotenv');
const songInfo = require('../controllers/search');
const userInfo = require('../controllers/login-controller')
const { TokenExpiredError } = require('jsonwebtoken');
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

exports.added = (req,res) =>{
    db.query('SELECT * FROM songs WHERE  title='+ mysql.escape(songInfo.info),(err,results)=>{
        if (err) {
            console.log(err);
        }db.query('INSERT INTO favoritesongs SET ?',{userId:userInfo.Id,name:songInfo.title,author:songInfo.author},(err,results)=>{
            if (err) {
                console.log(err);
            }
            res.redirect('/success/songs')
        })
    })
}

exports.favorites = (req,res) => {
    db.query('SELECT * FROM favoritesongs',(err,results)=>{    
        let user =   results.map((results)=>{
            return results.userId
        })
        if(err) {
            console.log(err);
        }
        else if (user.includes(userInfo.Id)) {
        db.query('SELECT name FROM favoritesongs WHERE userId='+mysql.escape(userInfo.Id),(err, results)=>{
            if (err) {
                console.log(err);
            }
            let info =   results.map((results)=>{
                return results.name
            })
                res.render('favoriteSongs',{
                    titles: info
                })
        })
    }else{
        res.render('favoriteSongs')
    }
    })

}