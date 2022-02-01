const mysql = require('mysql');
const { json } = require('body-parser');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music'
})
db.connect((err) => {
    if (err) { console.log(err); }
})

db.query('SELECT title,author from songs',(err,results)=>{
    if (err) {
        console.log(err);
    }
   const html = results.map((results) => {
       return  `'${results.title}' by ${results.author}` 
   })  
   exports.info = html
})
