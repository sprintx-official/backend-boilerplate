/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const app = express.Router();
//helmet and morgan is third-party mildware
const morgan = require("morgan");
//custom middleware
// const logger = require("../middleware/logger");

const routes_folder = require("../routes/index");
app.use("/api/", routes_folder);

//assigning Public Folder to our app
app.use(express.static("public"));
//assigning custom middleware function to our app
// app.use(logger);

module.exports = app;
