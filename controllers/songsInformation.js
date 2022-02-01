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

exports.songInfo=(req,res)=>{
    db.query('SELECT title FROM songs', (err, results) => {
    if (err) {
        console.log(err);
    }
    let title;
    exports.res = results
    const html = results.map((results) => {
        return `<p>${results.title}</p>`
    })        
    console.log(html);
    results.forEach( (element) => {
        title = element
    })
    
   // for (let i = 0; i < results.length; i++) {
   //      title = results[i].title;
   //      author = results[i].author;
   // }
   })           
}
  
    