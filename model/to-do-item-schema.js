const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    isDone: Boolean,
    taskDescription: String,
});

module.exports = {
    toDoItem: mongoose.model('toDoItem', itemSchema),
}
