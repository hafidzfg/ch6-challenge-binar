const express = require("express");
const app = express();
const router = express.Router();
// app.use(router);
// set the view engine to ejs
app.set("view engine", "ejs");

//set the routers
router.get("/", function (req, res) {
  res.render("index.ejs");
});

router.get("/login", function (req, res) {
  res.render("loginpage.ejs");
});

router.get("/game", function (req, res) {
  res.render("game.ejs");
});

app.get("/users", (req, res) => {
  res.json(users);
});

module.exports = router;
