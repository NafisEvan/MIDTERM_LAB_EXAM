var express 	= require('express');
var userModel 	= require.main.require('./models/user-model');
var router 		= express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.login(user, function(status){
		if(status){

			req.session.username = user.username;

			if(results[0].usertype == "admin")
			{
				res.redirect('/admin');
			}
			else if(results[0] == "employee")
			{
				res.redirect('/employee');
			}

		else
		{
			res.send('invalid username/password');
		}
	}

});
