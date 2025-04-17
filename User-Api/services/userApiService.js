const User = require("../models/user");
// récupére la liste des users
module.exports.getUsers = async (query) => {
    try {
        let users = await User.find(query);
        return users;
    } catch(e) {
        // Log Errors
        throw Error('Error while query all Users')
    }
}
// récupère un user suivant son id
module.exports.getUser = async (query) => {
    try {
        let user = await User.findOne(query);
        return user;
    } catch(e) {
    // Log Errorsthrow Error('Error while query one User')
        throw Error('Error while query' + e.User)
    }
}
// crée un user
module.exports.createUser = async (user) => {
    try {
        return await user.save();
    } catch(e) {
        // Log Errors
        throw Error('Error while save User')
    }
}
// met à jour un user
module.exports.updateUser = async (query, user) => {
    try {
        return await User.updateOne(query, user);
    } catch(e) {
        // Log Errors
        throw Error('Error while update User')
    }
}
// supprime un user
module.exports.deleteUser = async (query) => {
    try {
        return await User.deleteOne(query);
    } catch(e) {
        // Log Errors
        throw Error('Error while delete User')
    }
}