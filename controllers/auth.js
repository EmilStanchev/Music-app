const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music'
})
 db.connect((err) =>{
 if(err){ console.log(err); }
})
exports.register = (req,res) =>{
    console.log(req.body);

    const {name, email,password,passwordConfirm} = req.body;
    db.query('SELECT email FROM users WHERE email=?', [email], async (err,results)=>{
        if (err) {console.log(err);}
         if(results.length>0) {
            return res.render('register',{
                message: 'This email address is taken'
            })
        }
        else if(password!==passwordConfirm){
            return res.render('register',{
                message: 'Passwords do not match'
            })
        }   
        let saltRounds = 8;
        let hashedPass = await bcrypt.hash(password,saltRounds)
        let comparing = await bcrypt.compare(password,hashedPass)
        console.log(comparing);
        db.query('INSERT INTO users SET ?', {name: name, email: email,password: hashedPass}, (err,results)=>{
            if (err) {console.log(err);}
            else{
            return res.render('login',{
                message: 'You successfully are registered'
            })
        }
        })
    })
}
