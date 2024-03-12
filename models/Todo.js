const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
task:String,
desc:String,
completed:Boolean,

},{timestamps:true})
module.exports = mongoose.models.todo || mongoose.model("todo",todoSchema)