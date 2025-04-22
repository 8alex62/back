const express = require("express");
const router = express.Router();
// import le controlleur
const taskApiController = require("../controleurs/taskApiController");

router.get("/tasks", taskApiController.getTasks);
router.get("/tasks/:id", taskApiController.getTask);
router.post("/", taskApiController.createTask);
router.put("/tasks/:id", taskApiController.updateTask);
router.delete("/tasks/:id", taskApiController.deleteTask);
// export des routes contenu dans le router
module.exports = router;