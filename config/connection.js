// Set up MySQL connection.
    const mysql = require('mysql');

    let connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "burgers_db"
        });

// heroku else mysql
//     if (process.env.JAWSDB_URL) {
//         connection = mysql.createConnection(process.env.JAWSDB_URL);
//     }
//     else {
//         connection = mysql.createConnection({
//             host: "localhost",
//             user: "root",
//             password: "",
//             database: "burgers_db"
//         });
//     }

/*NOTE: module.exports EXPORTS OBJECTS LISTED TO THE RIGHT OF THE EQUAL SIGN THEREFORE
literally what we are doing is exporting the connection object
*/

// Export connection for our ORM to use.


// Export the Connection
    module.exports = connection;