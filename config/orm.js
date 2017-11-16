
// Import connections
const connection = require("../config/connection.js");

/*
Object for all our SQL statement functions.
Create an object that is going to collect all the data from our database

ORM all (orm.all) we are creating a connection query thatIs GETting or selecting everything from whatever the table input is
that we put into this method and that is going to use a callback in order to pass the result into our next file in the
file system which is going to be contained within the models folder.
 */


const orm = {
    all: function (cb) {
        let queryString = "SELECT * FROM burgers";
        // run query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insert: function (burgerName, cb) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burgerName,
            devoured: false,
        }, function (err, result) {
            if (err) throw err;
            cb(result);
        });

    },
    // delete: function(condition, cb) {
    //     orm.delete("burgers", condition, function(res) {
    //         cb(res);
    //     });
    // },


    // ORM update (orm.update) which is going to allow us to update or PUT data within our database
    update: function (burgerID, cb) {
        // run query
        connection.query('UPDATE burgers SET ? WHERE ?', [
            {devoured: true},
            {id: burgerID}
            ],
            function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
