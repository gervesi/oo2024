const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'if23',
    password: 'if23pass',
    database: 'if23_german_vesi'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL ühendatud');
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM temporary_added_people', (err, results) => {
    if (err) {
      throw err;
    }
    res.render('index', { people: results });
  });
});

app.get('/add', (req, res) => {
  res.render('add_person', { message: '' });
});

app.post('/add', (req, res) => {
  const personalCode = req.body.personal_code;
  db.query('SELECT name FROM people WHERE personal_code = ?', [personalCode], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      const name = result[0].name;
      db.query('SELECT * FROM temporary_added_people WHERE personal_code = ?', [personalCode], (err, tempResult) => {
        if (err) {
          throw err;
        }
        if (tempResult.length > 0) {
          res.render('add_person', { message: 'Isik on juba lisatud.' });
        } else {
          db.query('INSERT INTO temporary_added_people (name, personal_code, text) VALUES (?, ?, ?)', [name, personalCode, ''], (err, result) => {
            if (err) {
              throw err;
            }
            res.redirect('/');
          });
        }
      });
    } else {
      res.render('add_person', { message: 'Isikukoodi ei leitud.' });
    }
  });
});

app.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM temporary_added_people WHERE id = ?', [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.redirect('/');
  });
});

app.get('/texts/:personal_code', (req, res) => {
  const personalCode = req.params.personal_code;
  db.query('SELECT * FROM texts WHERE personal_code = ?', [personalCode], (err, results) => {
    if (err) {
      throw err;
    }
    if (results.length > 0) {
      res.render('texts', { texts: results });
    } else {
      res.send('Tekste ei leitud.');
    }
  });
});

app.listen(5217, () => {
    console.log('Port 5217');
});