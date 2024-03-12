const router = require("express").Router()
const todoController = require("./../controller/todoControllers")
router
    .get("/", todoController.getTodos)
    .post("/add", todoController.addTodos)
    .put("/update/:id", todoController.updateTodos)
    .delete("/delete/:id", todoController.deleteTodos)


module.exports = router