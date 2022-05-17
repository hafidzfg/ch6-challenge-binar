const express = require("express");
const app = express();
const port = 8080;
// set the view engine to ejs
app.set("view engine", "ejs");

//use middleware to parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routers = require("./routers");
const loginAPI = require("./controllers");

app.use(routers);

// //serve the assets, css, and js file
app.use(express.static("public"));

// const loginAPI = require("./login");
app.use(loginAPI);

app.listen(port);
console.log("Server is listening on port 8080");
