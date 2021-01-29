/* eslint-disable */
const express = require("express");
const app = express.Router();
//helmet and morgan is third-party mildware
const morgan = require("morgan");
const winston = require("winston");
require("../middleware/logger")();
require("../middleware/error");

const routes_folder = require("../routes/index");
app.use("/api/", routes_folder);

//assigning Public Folder to our app
app.use(express.static("public"));

module.exports = app;
