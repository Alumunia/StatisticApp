var express = require('express');
var app = module.exports = express();
var process = require('./adminController');

app.set('views', '../../');
app.set('view engine', 'ejs');

app.get('/admin', function (req, res) {
    res.render(views + 'views/admin/admin.ejs');
});