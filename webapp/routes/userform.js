var http = require('http');
var mailer = require('../sendmail.js');

function userform(req, res) {

var email = req.body.user.email;
var phone = req.body.user.phone;
var name = req.body.user.name;

var body = '<p> Name:' + name + '</p>';
body = body + '<p> Phone:' + phone + '</p>';
body = body + '<p> Email:' + email + '</p>';

mailer.sendmail(body, function(error, response) {
	if (error) {
		next(new Error('error submitting form, please try again'));
	}
	else {
		res.send('Done');
	}
});

//res.send('hello world');

}

exports.userform = userform;