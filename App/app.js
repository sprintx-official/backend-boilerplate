/* eslint-disable */
const express = require("express");
const app = express.Router();

const winston = require("winston");
require("../middleware/logger")();
require("../middleware/error");

const routes_folder = require("../routes/index");
app.use("/api/", routes_folder);

//assigning Public Folder to our app
app.use(express.static("public"));

module.exports = app;
