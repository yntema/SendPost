var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var instagram = require('instagram-node').instagram();
var cookieParser = require('cookie-parser');
var Lob = require('lob')('eece1db0db414955db0127598369cfdf3075a022');
var fs = require('fs');
var router = require('express').Router();

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


app.post('/postcard', function (req, res, next) {
  var template = fs.readFileSync('/Users/gerrityntema/hackreactor/MVP/mail-that/client/app/create/postcard.html').toString();
  Lob.postcards.create({
    description: 'Demo Postcard job',
    to: {
      name: req.body.name,
      address_line1: req.body.address,
      address_city: req.body.city,
      address_state: req.body.state,
      address_zip: req.body.postalCode
    },
    front: template,
    message: req.body.message,
    data: {
      picture: req.body.front,
      messageFront: req.body.messageFront
    }
  })
  .then(function (data) {
    res.send(data);
  });
})

console.log('Listening on 3000');
app.listen(3000);

module.exports = app;
