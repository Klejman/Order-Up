// Import the ORM to create functions that will interact with the database.

/*
Requires our ORM and it is going to contain all the methods that we will be using in order to modify our ORM
for use with the burgers_db.
 */
const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
         // calling orm.all running the function of response as a callback which will be sent into burgers_controller.js file
        orm.all(function(res){
            cb(res);
        });
    },

    insert: function(burger_name, cb) {
        orm.insert(burger_name, function(res){
            cb(res);
        });
    },

    update: function(burger_id, cb) {
        orm.update(burger_id, function(res){
            cb(res);
        });
    }

};


// Export at the end of the burger.js file.
module.exports = burger;