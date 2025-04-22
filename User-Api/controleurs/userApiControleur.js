const userApiService = require("../services/userApiService");
const User = require("../models/user");
const bcrypt = require("bcrypt");
// récupére la liste des users
module.exports.getUsers = async (req, res) => {
    try 
    {
        let users = await userApiService.getUsers();
        return res.status(200).json({status: 200, data: users, message: "Sucessfully User retrived list"});
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }

};
// récupère un user suivant son id
module.exports.getUser = async (req, res) => {
    try
    {
        let user = await userApiService.getUser({_id: req.params.id});
        return res.status(200).json({status: 200, data: user, message: "Sucessfully User retrived"});
    }
    catch (e) 
    {
        return res.status(400).json({status: 400, message: e.message});
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
        let _ = await userApiService.createUser(user);
        return res.status(200).json({status: 200, data: _, message: "Sucessfully User created"});
    }
    catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

// update un user
module.exports.updateUser = async(req, res) => {
    try{// hash le mdp avec bcrypt
    let salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    let user = await userApiService.updateUser({_id: req.params.id}, req.body);
    return res.status(200).json({status: 200, data: user, message: "Sucessfully User updated"});
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

// supprime un user
module.exports.deleteUser = async (req, res) => {
    try
    {
        let user = await userApiService.deleteUser({_id: req.params.id});
        return res.status(200).json({status: 200, data: user, message: "Sucessfully User deleted"});
    }
    catch(e)
    {
        return res.status(400).json({status: 400, message: e.message});
    }
}