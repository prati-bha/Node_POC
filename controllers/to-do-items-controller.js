const { addItem, editItem, listItem, deleteItem } = require('../services/to-do-items.service');


const addToDoItem = async (req, res) => {
    await addItem(req, res);
}

const deleteToDoItem = async (req, res) => {
    await deleteItem(req, res);
}
const listToDoItems = async (req, res) => {
    await listItem(req, res);
}
const editToDoItem = async (req, res) => {
    await editItem(req, res);
}

module.exports = {
    add: addToDoItem,
    list: listToDoItems,
    edit: editToDoItem,
    delete: deleteToDoItem,
}