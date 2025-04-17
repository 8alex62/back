const userApiService = require("../services/userApiService");
const User = require("../models/user");
const bcrypt = require("bcrypt");
// récupére la liste des users
module.exports.getUsers = async (req, res) => {
    try 
    {
        let users = await userApiService.getUsers();
        res.status(200).json(users);
    }
    catch(e){
        res.status(400).json(e);
    }

};
// récupère un user suivant son id
module.exports.getUser = async (req, res) => {
    try
    {
        let user = await userApiService.getUser();
        res.status(200).json(user);
    }
    catch (e) 
    {
        res.status(400).json(e);
    }
};

// crée une user
module.exports.createUser = async (req, res) => {
    try{
        // hash le mdp avec bcrypt
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        let user = new User(req.body);

        //crée le user dans mangoDB
        user.save();
        res.status(200).json(user);
    }
    catch (e) {
        res.status(400).json(e);
    }
}

// update un user
module.exports.updateUser = async(req, res) => {
    // hash le mdp avec bcrypt
    let salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    // ..
}

// supprime un user
module.exports.deleteUser = async (req, res) => {
    // ..
}