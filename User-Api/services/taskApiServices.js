const Task = require("../models/task");
const User = require("../models/user");
// récupére la liste des users
module.exports.getTasks = async (query) => {
    try {
        let tasks = await Task.find(query);
        return tasks;
    } catch(e) {
        // Log Errors
        throw Error('Error while query all Tasks')
    }
}
// récupère un user suivant son id
module.exports.getTask = async (query) => {
    try {
        let task = await Task.findOne(query).populate('user');
        return task;
    } catch(e) {
    // Log Errorsthrow Error('Error while query one User')
        throw Error('Error while query' + e.Task)
    }
}
// crée une tache
module.exports.createTask = async (task) => {
    try{
        let savedTask = await task.save();
        //crée la task dans mangoDB
        await User.findByIdAndUpdate(savedTask.User, {$push: {tasks: savedTask._id} });
        return savedTask;
    }
    catch (e) {
        throw Error('Error while save Task : ' + e.message);
    }
}
// met à jour un user
module.exports.updateTask = async (query, task) => {
    try {
         await Task.updateOne(query, task);
         return task;
    } catch(e) {
        // Log Errors
        throw Error('Error while update Task')
    }
}
// supprime un user
module.exports.deleteTask = async (query) => {
    try {
        let deletedTask = Task.findOne(query);
        await User.findByIdAndUpdate(deletedTask.User, {$pull: {task: deletedTask._id}});
        return await Task.deleteOne(query);
    } catch(e) {
        // Log Errors
        throw Error('Error while delete Task')
    }
}