// Set up MySQL connection.
const mysql = require("mysql");

// var connection;

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

/*
NOTE: module.exports EXPORTS OBJECTS LISTED TO THE RIGHT OF THE EQUAL SIGN THEREFORE
literally what we are doing is exporting the connection object
*/

// Export connection for our ORM to use.
module.exports = connection;


