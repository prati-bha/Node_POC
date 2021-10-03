const { toDoItem } = require("../model/to-do-item-schema");


const listToDoItems = async (req, res) => {

    try {
        const listOfItems = await  toDoItem.find();
        res.json(listOfItems);
    } catch (error) {
        res.json({message: error.message});
    }
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

const editToDoItem = async (req, res) => {
    const itemId = req.body.id;
    const updatedBody = req.body.data;
    try {
        await toDoItem.updateOne({_id: itemId}, updatedBody );
        res.json({data: toDoItem, message: "Item Updated"});
    } catch (error) {
        res.json({message: error.message});
    }
}

const deleteToDoItem = async (req, res) => {
    const itemId = req.body.id;
    try {
        await toDoItem.deleteOne({_id: itemId});
        res.json({data: toDoItem, message: "Item Deleted"});
    } catch (error) {
        res.json({message: error.message});
    }
}

module.exports = {
    addItem: addToDoItem,
    listItem: listToDoItems,
    editItem: editToDoItem,
    deleteItem: deleteToDoItem,
}