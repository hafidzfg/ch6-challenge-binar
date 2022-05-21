const express = require("express");
const router = express();
const { userBiodata, userGame, userHistory } = require("../models");
// MENAMBAHKAN DEPENDENCY SEQUELIZE
// MEMBUAT MODEL, MIGRATION

router.use(express.Router());
router.use(express.json());

// buatlah endpoint controller untuk mengakses dashboard
router.get("/dashboard", (req, res, next) => {
    // MENAMBAHKAN KODE UNTUK MENGAMBIL DATA LIST USER DI DATABASE
    Promise.all( [userGame.findAll(), userBiodata.findAll(), userHistory.findAll()]).then((data) => {
        res.render('dashboard', {
            usergames: data[0],
            users: data[1],
            userhistory: data[2]
        })
    })
   
});

// Photos.findOne({
//     where:{id: photoId}, 
//     attributes: ['id','userId','filename', 'caption', 'createdAt']
//           }).then(function (rowPhotos){
//              Comments.findAll({
//                     where: {photoId:photoId}
//              }).then(function (rowComments){
//                 Likes.findAll({
//                     where:  {photoId: photoId}
//                 }).then(function (rowLikes){
//                     Users.findAll().then(function (commentUser){
//             var data= {
//             photoData: rowPhotos,
//             commentData: rowComments,
//             likesData: rowLikes,
//             userData:commentUser
//             }
//            console.log(data);
//            res.render('views', {data:data})

//                     })

//                 })
//         })  
// })

// User Game API
router.post("/dashboard/post/user", (req, res, next) => {
    userGame.create({
        user_id: req.body.user_id,
        email: req.body.email,
        password: req.body.password
    }).then(() => {
        res.redirect("/dashboard")
    })
});

router.post("/dashboard/delete/user:user_id", (req, res, next) => {
    userGame.destroy({
        where: {
            user_id: req.body.user_id
        },
    }).then(() => {
        res.redirect("/dashboard")
    });
    // connection.query('DELETE FROM "userBiodata" WHERE id_user='+req.body.id_user+"", function(err, result) {
    //     if(err){
    //         throw err;
    //     } else {
    //         res.render('dashboard', users);                
    //     }
    // });
});

router.post("/dashboard/update/user:user_id", (req, res, next) => {
    userGame.findOne({ where: {
        user_id: req.body.user_id
        }
    }).then(data => {
        data.update({
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.redirect('/dashboard')
        })
    })
});


// User Biodata API
router.post("/dashboard/post/bio", (req, res, next) => {
    userBiodata.create({
        id_user: req.body.id_user,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address
    }).then(() => {
        res.redirect("/dashboard")
    })
});

router.post("/dashboard/delete/bio:id_user", (req, res, next) => {
    userBiodata.destroy({
        where: {
            id_user: req.body.id_user
        },
    }).then(() => {
        res.redirect("/dashboard")
    });
    // connection.query('DELETE FROM "userBiodata" WHERE id_user='+req.body.id_user+"", function(err, result) {
    //     if(err){
    //         throw err;
    //     } else {
    //         res.render('dashboard', users);                
    //     }
    // });
});

router.post("/dashboard/update/bio:id_user", (req, res, next) => {
    userBiodata.findOne({ where: {
        id_user: req.body.id_user
        }
    }).then(data => {
        data.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address
        }).then(() => {
            res.redirect('/dashboard')
        })
    })
});

// User History API
router.post("/dashboard/post/history", (req, res, next) => {
    userHistory.create({
        user_id: req.body.user_id,
        score: req.body.score
    }).then(() => {
        res.redirect("/dashboard")
    })
});

router.post("/dashboard/delete/history:user_id", (req, res, next) => {
    userHistory.destroy({
        where: {
            user_id: req.body.user_id
        },
    }).then(() => {
        res.redirect("/dashboard")
    });
});

router.post("/dashboard/update/history:user_id", (req, res, next) => {
    userHistory.findOne({ where: {
        user_id: req.body.user_id
        }
    }).then(data => {
        data.update({
            score: req.body.score
        }).then(() => {
            res.redirect('/dashboard')
        })
    })
});
module.exports = router;
