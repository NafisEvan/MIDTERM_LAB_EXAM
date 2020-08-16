var db = require('./db');

module.exports={

register : function(user, callback){
	    var sql = "insert into users values('','" + user.name + "', '" + user.username + "','" + user.password + "', '"+user.contactno+"','" + user.user + "')";
		db.execute(sql, function(status){
			callback(status);
			
		});
	},
}
