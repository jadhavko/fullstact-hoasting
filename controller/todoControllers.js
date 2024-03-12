const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.addTodos = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo Create Success" })
})
exports.getTodos = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "Todo Fetch Success", result })
})
exports.updateTodos = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo updqate Success" })
})
exports.deleteTodos = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo delete Success" })
})