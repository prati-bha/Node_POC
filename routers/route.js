
const express = require("express");
const { add, list, edit, delete: deleteItem } = require("../controllers/to-do-items-controller");
const { API_ROUTES } = require("./constants");

const route = express.Router();

route.get(API_ROUTES.HOME, (req,res) => {
    res.status(200).json("This is To-Do-App")
})

route.post(API_ROUTES.TO_DO_ITEMS.ADD_ITEM, add);
route.get(API_ROUTES.TO_DO_ITEMS.LIST_ITEM, list);
route.put(API_ROUTES.TO_DO_ITEMS.EDIT_ITEM, edit);
route.delete(API_ROUTES.TO_DO_ITEMS.DELETE_ITEM, deleteItem);

module.exports = {
    route: route
}