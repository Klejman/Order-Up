const express = require('express');
// Import the model (burger.js) to use its database functions/ business logic.
const burger = require('../models/burger.js');
// create an instance of express and assign it to router versus app
const router = express.Router();

/*
References the file in the models folder the burger.js file and calls burger.all
passing burger data into our function and eventually what we will do is add in burger data
as what we are going to be sending into our index.handlebars file
1. calling burger.all in burger.js file
2. which calls ORM.all within the ORM.js file
3. server.js calls all of this----
 */

/***********************************************/
// Burger Chow Down Router Routes

// Index Page
router.get('/index', function (req, res) {
    burger.all(function(data) {
        let hbsObject = {burgers: data};
        //console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


// New Burger
router.post('/burger/create', function (req, res) {
    burger.insert(req.body.burger_name, function() {
        res.redirect('/index');
    });
});


// Devour It!
router.post('/burger/eat/:id', function (req, res) {
    burger.update(req.params.id, function() {
        res.redirect('/index');
    });
});

// Redirects to reflect updates without having to refresh
router.get('/', function (req, res) {
    res.redirect('/index');
});


// Export routes for server.js to use.
module.exports = router;


