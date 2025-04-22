const Task = require("../models/task");
const taskApiService = require("../services/taskApiServices");
const bcrypt = require("bcrypt");
// récupére la liste des users
module.exports.getTasks = async (req, res) => {
    try 
    {
        let tasks = await taskApiService.getTasks();
        return res.status(200).json({status: 200, data: tasks, message: "Sucessfully retrieved all tasks"});
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
};

// récupère une task suivant son id
module.exports.getTask = async (req, res) => {
    try
    {
        let task = await taskApiService.getTask({_id: req.params.id});
        return res.status(200).json({status: 200, data: task, message: "Sucessfully task retrived"});
    }
    catch (e) 
    {
        return res.status(400).json({status: 400, message: e.message});
    }
};

// crée une task
module.exports.createTask = async (req, res) => {
    try{
        let task = new Task(req.body);
        //crée la task dans mangoDB
        task =  await taskApiService.createTask(task);
       
        return res.status(201).json({status: 201, data: task, message: "Sucessfully task created"});
    }
    catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

// update une task
module.exports.updateTask = async(req, res) => {
    try{
        let task = await taskApiService.updateTask({_id: req.params.id}, req.body);
        return res.status(200).json({status: 200, data: task, message: "Sucessfully task updated"});
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

// supprime un user
module.exports.deleteTask = async (req, res) => {
    try
    {
        let task = await taskApiService.deleteTask({_id: req.params.id});
        return res.status(200).json({status: 200, data: task, message: "Sucessfully task deleted"});
    }
    catch(e)
    {
        return res.status(400).json({status: 400, message: e.message});
    }
}