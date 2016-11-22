
/**
 * Module dependencies.
 */
//Global Variable

express = require('express');
app = module.exports = express();
http = require('http');
mysql = require('mysql');
path = require('path');
appDir = path.dirname(require.main.filename);
app.set('views', appDir);
app.set('view engine', 'ejs');
connection = require('express-myconnection');
d3 = require("d3");
app.locals.barChartHelper = require('./bar_chart_helper');




// Setting Main Environtmen

app.set('port', process.env.PORT || 3030);
app.use(express.logger('dev'));
app.set('views', __dirname);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(
        connection(mysql, {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'mmdbv3'
        }, 'request')
        );

// 
app.use(setCurrentUrl);



function setCurrentUrl(req, res, next) {
    app.set('CURR_URL', req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
}



app.use(express.cookieParser('statistic-App'));
app.use(express.session());

app.use(express.json());
app.use(express.urlencoded());


var login = require('./routes/login/loginController');
var home = require('./routes/home/homeController');
var admin = require('./routes/admin/adminController');
var index = require('./routes/index')

app.use(login);
app.use(home);


app.use(function (req, res, fn) {
    res.render('error_page', {status: 404, url: req.url, error: 'Ops... Page not Found!'});
});

app.use(function (err, req, res, next) {
    res.render('error_page', {
        status: err.status || 500,
        error: err
    });
});

app.use(app.router);

http.createServer(app).listen(app.get('port'), function () {

    console.log('Listening to %s ', app.get('port'));
});



app.get("/Rizki", function (req, res) {
    res.json({"Messsage": " Hello World"});
});