var process = require('../commonController');

app.get('/home', function (req, res) {

    if (req.session.nama_lengkap) {
        process.getSeller(req, function (status, data) {
            var params = {
                sess_user: (req.session.nama_lengkap) ? req.session.nama_lengkap : '',
                app: 'Statistic-App',
                data: data
            }
            res.render('views/home/home.ejs', params);
        });

    } else {
        res.redirect('/login');
        req.session.login_error = 'Oops youre not logged in';
    }


});

app.post('/sales_order', function (req, res) {
    process.getSalesOrder(req, function (status, data) {
        console.log(data.store_id);
        var params = {
            sess_user: req.session.nama_lengkap,
            data: data
        };
        console.log(JSON.stringify(data));
        res.render('views/sales_order/sales_order-2.ejs', params);
//        res.render('views/sales_order/login_1.ejs', params);
    });
});

app.get('/sales_order_1', function (req, res) {

    var dataset = [{
            "salesperson": "red",
            "sales": "33"
        },
        {
            "salesperson": "green",
            "sales": "43"
        },
        {
            "salesperson": "blue",
            "sales": "12"
        },
        {
            "salesperson": "cyan",
            "sales": "10"
        }
    ]

//    console.log(JSON.stringify(data.store_id));
    console.log('dumbledores');
    var params = {
        data11: dataset
    }
    res.render('views/sales_order/sales-order_3.ejs', params);


});

app.get('/sales_order23', function (req, res) {
    var fixtureData = [
        {
            "name": "1",
            "count": 36
        },
        {
            "name": "2",
            "count": 43
        },
        {
            "name": "3",
            "count": 50
        },
        {
            "name": "4",
            "count": 41
        },
        {
            "name": "5",
            "count": 34
        },
        {
            "name": "6",
            "count": 44
        },
        {
            "name": "7",
            "count": 67
        },
        {
            "name": "8",
            "count": 63
        },
        {
            "name": "9",
            "count": 51
        },
        {
            "name": "10",
            "count": 53
        },
        {
            "name": "11",
            "count": 52
        },
        {
            "name": "12",
            "count": 60
        }
    ];

    res.render('views/sales_order/tutorial', fixtureData);
});

app.get('/sales_order_3', function (req, res) {
    process.getSalesOrder(req, function (status, data) {
        console.log(JSON.stringify(data.store_id));
        console.log('dumbledore');
        res.render('views/sales_order/sales-order_3.ejs');
    });

})

app.get('/sales_order', function (req, res) {
    res.redirect('/home');
})

app.get('/user-management', function (req, res) {

    process.getUser(req, function (status, data) {
        var params = {
            sess_user: req.session.nama_lengkap,
            data: data
        };
        res.render('views/userManagement/userManagement.ejs', params);
    });
});






