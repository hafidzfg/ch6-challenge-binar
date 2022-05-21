const express = require("express");
const bodyParser = require("body-parser");
const router = express();
const fs = require("fs");
let userlogin = require("../db/admin.json");

//configure body parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// User login API
router.post("/api/v1/postRegister", (req, res) => {
  const register = req.body;
  console.log(register);
  //still error not working yet
  let data = JSON.stringify(register);
  console.log(data);
  fs.writeFile(userlogin, data, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
  res.send("User registration successful!");
});

router.post("/api/v1/login", (req, res) => {
  const login = req.body;
  console.log(userlogin);
  for (let i = 0; i < userlogin.length; i++) {
    const element = userlogin[i];
    if (
      login.username === element.username &&
      login.password === element.password
    ) {
      res.status(200);
      res.redirect("/game");
    } else if (
      login.username != element.username ||
      login.password != element.password
    ) {
      res.status(401);
      res.send("Wrong email or password!");
    } else if (err)
      res.send("Something is wrong! Please contact the developer");
  }
});

router.post("/api/v1/adminlogin", (req, res) => {
  const login = req.body;
  console.log(userlogin);
  for (let i = 0; i < userlogin.length; i++) {
    const element = userlogin[i];
    if (
      login.username === element.username &&
      login.password === element.password
    ) {
      res.status(200);
      res.redirect("/dashboard");
    } else if (
      login.username != element.username ||
      login.password != element.password
    ) {
      res.status(401);
      res.send("Wrong email or password!");
    } else if (err)
      res.send("Something is wrong! Please contact the developer");
  }
});
module.exports = router;
