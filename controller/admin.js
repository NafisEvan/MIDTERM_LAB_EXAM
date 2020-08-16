var express = require('express');
var userModel = require.main.require('./models/user-model');
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



module.exports = router;
