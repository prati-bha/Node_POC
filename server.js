
  
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.ATLAS_URI;
const app = express();
const port = process.env.PORT || 8000;
const route = require('./routers/route').route;

app.use('/', route);
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true }).then(() => {
    app.listen(port, () => {
        console.log("server is listening on", port)
    })
}).catch((error) => {
    console.log(error.message)
})

