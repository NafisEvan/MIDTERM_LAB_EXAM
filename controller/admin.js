var express = require('express');
var userModel = require.main.require('./models/user-model');
var userModel = require.main.require('./models/register');
var db 		= require.main.require('./models/db');
var router = express.Router();

router.get('*', function(req, res, next){
	if(req.session.username == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){
  var sql = "select * from users where username='"+req.session.username+"'";
  db.getResults(sql,function(results){

    res.render('admin',{userlist: results[0], username : req.session.username});
  });
});


router.get('/', function(req, res){
	res.render('register/index');
});

router.post('/', function(req, res){

	var user = {
		name    : req.body.name,
		username: req.body.username,
		password: req.body.password,
	  contactno	: req.body.contactno,
		user : req.body.user
	}

	userModel.register(user, function(status){

		if(status){

			res.redirect('/login');
		}else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;
