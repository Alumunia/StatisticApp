/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Get Users
exports.getUser = function (req, fn) {
    req.getConnection(function (err, connection) {
        var query = connection.query('SELECT * FROM users ORDER BY id',
                function (err, rows) {
                    if (err)
                        return fn(false, err);
                    return fn(true, rows);
                });
        console.log(query.sql);
    });
};

exports.deleteUser = function (req, fn) {
    var get = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function (err, connection) {
        connection.query("DELETE FROM users WHERE id = ? ", [get.id_user], function (err, rows) {
            if (err)
                return fn(false, err);

            return fn(true, "User  telah dihapus");
        });
    });
};

//Get Seller
exports.getSeller = function (req, fn) {
    req.getConnection(function (err, connection) {
        var query = connection.query('SELECT * FROM stores',
                function (err, rows) {
                    if (err)
                        return fn(false, err);
                    return fn(true, rows)
                });
    });
};

//Get sales order
exports.getSalesOrder = function (req, fn) {
    var get = JSON.parse(JSON.stringify(req.body));

//    req.getConnection(function (err, connection) {
//        var query = connection.query('SELECT * FROM sales_orders a WHERE a.store_id = ? AND so_date BETWEEN ? AND ? ORDER BY a.so_date DESC', [get.id_store], [get.startTime], [get.endTime], function (err, rows) {
//                    if (err)
//                        return fn(false, err);
//                    return fn(true, rows);
//                });
//    });
};


