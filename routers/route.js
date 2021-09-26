
const express = require("express");
const { add } = require("../controllers/to-do-items-controller");
const { API_ROUTES } = require("./constants");

const route = express.Router();

route.post(API_ROUTES.HOME, (req,res) => {
    res.status(200).json("This is To-Do-App")
})

route.get(API_ROUTES.TO_DO_ITEMS.ADD_ITEM, add)  

module.exports = {
    route: route
}