// Set up MySQL connection.
    const mysql = require('mysql');

    const connection = mysql.createConnection(process.env.JAWSDB_URL || {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "",
        database: 'burgers_db'
    });



    connection.connect(function(err) {
        if (err) {
            console.error(`error connection: ${err.stack}`);
            return;
        }
        console.log(`connected as id ${connection.threadId}`);
        });



/*NOTE: module.exports EXPORTS OBJECTS LISTED TO THE RIGHT OF THE EQUAL SIGN THEREFORE
literally what we are doing is exporting the connection object
*/

// Export connection for our ORM to use.


// Export the Connection
    module.exports = connection;