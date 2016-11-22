var express = require('express');
var app = module.exports = express();


app.set('../../views/', __dirname);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render(__dirname + 'index/index.ejs', {error_login: ''});
});