var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var instagram = require('instagram-node').instagram();
var cookieParser = require('cookie-parser');
var Lob = require('lob')('eece1db0db414955db0127598369cfdf3075a022');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


app.post('/postcard', function (req, res, next) {
  console.log('data sent to lob:', req.body);
  Lob.postcards.create({
    description: 'Demo Postcard job',
    to: {
      name: req.body.name,
      address_line1: req.body.address,
      address_city: req.body.city,
      address_state: req.body.state,
      address_zip: req.body.postalCode
    },
    front: req.body.front,
    message: req.body.message
  }, function (err, res) {
    console.log(err, res);
  });
})

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
