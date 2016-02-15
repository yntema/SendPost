var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

console.log('Listening on 3000');
app.listen(3000);

module.exports = app;
