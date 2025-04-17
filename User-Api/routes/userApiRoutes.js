// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");
// const bcrypt = require("bcrypt");

// // route pour récuperer tout les users.
// router.route("/users")
//     .get((req, res) => {
//         User.find()
//             .then((data) => res.status(200).json(data))
//             .catch((error) => res.status(400).json(error))
//     });

// //route pour recuperer un user suivant son id : localhost/api/user/id
// router.route("/:id")
//     .get((req, res) => {
//         User.findOne({_id: req.params.id})
//         .then((data) => res.status(200).json(data))
//         .catch((error) => res.status(400).json(error))
//     });

// //route pour crée un user
// router.route("/")
//     .post(async (req, res) => {
//         let salt = await bcrypt.genSalt(10);
//         req.body.password = await bcrypt.hash(req.body.password, salt);

//         // crée le user
//         let user = new User(req.body);

//         //crée le user dans mangoDB
//         user.save()
//         .then((data) => res.status(201).json(data))
//         .catch((err) => res.status(400).json(err));
//     });

//     //route pour update un user en particulier
//     router.route("/:id")
//     .put(async (req, res) => {
//         //hesh le mdp avec bcrypt qui est dans la base de donnée
//         let salt = await bcrypt.genSalt(10);
//         req.body.password = await bcrypt.hash(req.body.password, salt);
//         //met a jour le user
//         User.updateOne({_id: req.params.id})
//             .then((data) => res.status(200).json(data))
//             .catch((err) => res.status(400).json(err));
//     });  

//     //route pour delete un user
//     router.route("/:id")
//         .delete((req, res) => {
//             User.deleteOne({ _id: req.params.id})
//                 .then((data) => res.status(200).json(data))
//                 .catch((err) => res.status(400).json(err))
//         });

// // export des routes contenus dans router
// module.exports = router;

const express = require("express");
const router = express.Router();
// import le controlleur
const userApiControleur = require("../controleurs/userApiControleur");

router.get("/users", userApiControleur.getUsers);
router.get("/:id", userApiControleur.getUser);
router.post("/", userApiControleur.createUser);
router.put("/:id", userApiControleur.updateUser);
router.delete("/:id", userApiControleur.deleteUser);
// export des routes contenu dans le router
module.exports = router;