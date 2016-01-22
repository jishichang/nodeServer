var express = require('express');
var router = express.Router();
var querystring = require('querystring');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('this time is ' + new Date().toString());
  //res.render('index', { title: 'this time is ' + new Date().toString() });
  res.send('user:' + req.params);
});

module.exports = router;
