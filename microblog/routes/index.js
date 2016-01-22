/*var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyExpress First Web Site' });
});

module.exports = router;*/

/*
	exports.hello = function(req, res) {
		res.send('user:' + req.params.username);
	};
*/

/*exports.index = function(req, res) {
	res.render('index', {
		title: '首页'
	});
};
exports.user = function(req, res) {};
exports.post = function(req, res) {};
exports.reg = function(req, res) {};
exports.doReg = function(req, res) {};
exports.login = function(req, res) {};
exports.doLogin = function(req, res) {};
exports.logout = function(req, res) {};*/

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			title: '首页'
		});
	});
	app.get('/reg', function(req, res) {
		res.render('reg', {
			title: '用户注册',
		});
	});
};