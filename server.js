var express = require('express');

var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

var hbs = require("express-handlebars");

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);