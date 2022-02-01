const express = require('express')
const mysql = require('mysql')
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()
const session = require('express-session');
const flash = require('req-flash');
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(express.static(path.join(__dirname,'./public')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const port = 3000

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music'
})
 db.connect((err) =>{
 if(err)
 {
     console.log('SQL '+err);
 }
  else { console.log('MySQL was connected ...')};

})
app.set('view engine', 'hbs');
app.get('/upload',(req,res)=>{
    res.render('hi')
})
app.use('/',require('./routes/pages'))
app.use('/auth',require('./routes/auth'))
app.use('/',require('./routes/adminPages'))
app.use('/success',require('./routes/login-router'))
app.use('/success/songs',require('./routes/search'))
app.use('/admin', require('./routes/adminLogin')) 
app.use('/logged',require('./routes/addSongToDB'))
app.use('/success/editProfile',require('./routes/profile'))
app.use('/upload',require('./routes/imageUpload'))
app.use('/allUsers',require('./routes/allUsers'))
app.use('/allAdmins',require('./routes/allAdmins'))
app.use('/success/contact/',require('./routes/contactForm'))
app.use('/success/songs',require('./routes/songInformation'))
app.use('/success/songs/search/',require('./routes/addToFavorites'))
app.use('/success/profile/',require('./routes/favorites'))

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log('Server listening on ' + port);
})