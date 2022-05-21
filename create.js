const { userGame } = require("./models");

userGame.create({
    user_id: "sadmin",
    email: "sadmin@gmail.com",
    password: "rahasia123"
  }).then((userGames) => {
    console.log(userGames);
  });
