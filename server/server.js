var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var instagram = require('instagram-node').instagram();
var cookieParser = require('cookie-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

// instagram.use({
//   client_id: 'cd40bce829ce433686850a44174b2dda',
//   client_secret: '9e64e448185e4f2bad9e7f3f1e7438ac'
// });

// var redirect_uri = 'http://localhost:3000/handleauth';

// app.get('/handleauth', function (req, res) {
//   instagram.authorize_user(req.query.code, redirect_uri, function (err, result) {
//     if(err) {
//       console.error(err);
//     } else {
//       console.log('response from instagram: ', result);
//       res.cookie('token', result.access_token, { maxAge: 900000, httpOnly: false});
//       res.redirect('/');
//     }
//   });
// });

console.log('Listening on 3000');
app.listen(3000);

module.exports = app;
