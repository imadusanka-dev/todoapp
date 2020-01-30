var express = require('express');
var router = express.Router();
var connection = require('../config/connection');


/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM todo',function (err,rows) {
    if (err) throw err;
    res.render('index',{todos:rows});
  });
});

router.post('/addtodo', function (req, res) {
  const detail = req.body.detail;
  connection.query('INSERT INTO todo SET detail= ?', detail, function (err,result) {
    if(err) throw err;
    res.redirect('/');
  });
});

router.get('/delete/:id', function (req, res) {
    var todoid = req.params.id;
    connection.query('DELETE FROM todo WHERE id = ?', todoid, function (err, result) {
    if (err) throw err;
    res.redirect('/');
  });
});

router.get('/edit/:id', function (req, res) {
  var todoid = req.params.id;
  connection.query('SELECT * FROM todo WHERE id = ?', todoid, function (err,rows) {
    if(err) throw err;
    res.render('edit', {todos: rows});
  });
});

router.post('/update/:id', function (req, res) {
  var todoid = req.params.id;
  var detail = req.body.detail;
  connection.query(`UPDATE todo SET detail='${detail}' WHERE id=${todoid}`, function (err, result) {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
