var http = require('http');
var mailer = require('../sendmail.js');

function userform(req, res) {

var email = req.body.user.email;
var phone = req.body.user.phone;
var name = req.body.user.name;
var city = req.body.user.city;

var body = '<p> Name:' + name + '</p>';
body = body + '<p> Phone:' + phone + '</p>';
body = body + '<p> Email:' + email + '</p>';
body = body + '<p> City:' + city + '</p>';

mailer.sendmail(body, function(error, response) {
	if (error) {
		next(new Error('error submitting form, please try again'));
	}
	else {
		res.redirect('index.html?success=user');
	}
});

//res.send('hello world');

}

function supform(req, res) {

var email = req.body.user.email;
var phone = req.body.user.phone;
var name = req.body.user.name;
var city = req.body.user.city;
var licensed = req.body.user.licensedInCA;
var cert = req.body.user.certification;
var massageTypeOffered = req.body.user.massageTypeOffered;
var experience = req.body.user.experience;
var havemsgTable = req.body.user.havemassagetable;
var travel = req.body.user.travel;
var zip = req.body.user.zip;

//var 
//var licensed1 = req.body.user.

var body = '<p> Name:' + name + '</p>';
body = body + '<p> Phone:' + phone + '</p>';
body = body + '<p> Email:' + email + '</p>';
body = body + '<p> City:' + city + '</p>';
body = body + '<p> Licensed:' + licensed + '</p>';
body = body + '<p> Certification:' + cert + '</p>';
body = body + '<p> Massage Type Offered:' + massageTypeOffered + '</p>';
body = body + '<p> Experience:' + experience + '</p>';
body = body + '<p> Have Massage Table:' + havemsgTable + '</p>';
body = body + '<p> Travel:' + travel + '</p>';
body = body + '<p> Zip:' + zip + '</p>';

mailer.sendmail(body, function(error, response) {
	if (error) {
		next(new Error('error submitting form, please try again'));
	}
	else {
		//res.send({retStatus : 'Success',
      	//	redirectTo: '/index.html'});

		res.redirect('index.html?success=sup');
	}
});

//res.send('hello world');

}


exports.userform = userform;
exports.supform = supform;