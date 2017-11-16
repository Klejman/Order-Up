// Set boiler plate node server code
var express= require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var methodOverride = require('method-override');

// Set Handlebars.
var exphbs = require("express-handlebars");

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + '/public'));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Reference Routes.js
var router = require("./controllers/burgers_controller.js");
app.use('/', router);



app.listen(PORT, function() {
    console.log("listening on port : ", PORT);
});
