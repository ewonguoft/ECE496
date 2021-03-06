var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var login = require("./routes/login");

var app = express();

var port = 3002;

app.listen(app.listen(port, function(){
	console.log("Server running on port", port);
}));

//views
app.set("views",  path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//Body parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Routes

app.use("/", index);
app.use("/api", login);