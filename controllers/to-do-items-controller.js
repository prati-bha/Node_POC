const { toDoItem } = require("../model/to-do-item-schema");

const listOfItems = (req, res) => {
    
}

const addToDoItem = async (req, res) => {
    const item = req.body;
    const newItem = new toDoItem(item);

    try {
        await newItem.save();
        res.json(newItem);
    } catch (error) {
        res.json({message: error.message});
    }
}

module.exports = {
    list: listOfItems,
    add: addToDoItem,
}