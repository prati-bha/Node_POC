
const express = require("express");

const route = express.Router();

route.get('/', (req,res) => {
    res.status(200).json("This is To-Do-App")
})

module.exports = {
    route: route
}