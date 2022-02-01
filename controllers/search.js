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
exports.search = (req, res) => {
    const { title, lyrics } = req.body;
    db.query('SELECT * FROM songs WHERE title='+mysql.escape(title.toLowerCase()), [title, lyrics], async (err, results) => {
        if (err) {
            console.log(err);
        }
        else if (results == 0) {
            console.log('Invalid song`s name');
            res.redirect(301,'/success/songs');
        }
        else {
            exports.title = results[0].title
            exports.author = results[0].author
            console.log(results[0].title);
            res.render('song', {
                Title: results[0].title,
                Author: results[0].author,
                Lyrics: results[0].lyrics
            })
        }
    })
} 