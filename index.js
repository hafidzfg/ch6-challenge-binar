const express = require("express");

const port = 8080;
const app = express();
// set the view engine to ejs
app.set("view engine", "ejs");

//use middleware to parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("./routes");
const loginAPI = require("./controllers/index");
const dashboardAPI = require("./controllers/dashboard");

app.use(routes);

// //serve the assets, css, and js file
app.use(express.static("public"));

// const loginAPI = require("./login");
app.use(loginAPI);
app.use(dashboardAPI);

app.listen(port);
console.log("Server is listening on port 8080");
