/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//helmet and morgan is third-party mildware
const morgan = require("morgan");
//custom middleware
const logger = require("../middleware/logger");
//Giving path to users page
const users = require("../routes/modules/users/users");
//Giving path to home page
const home = require("../routes/modules/home/home");
//Giving path to about page
const about = require("../routes/modules/about/about");
const express = require("express");
const app = express.Router();

//App can get JSON data
app.use(express.json());
//App can get data in Key Value pair
app.use(express.urlencoded({ extended: true }));
//assigning Public Folder to our app
app.use(express.static("public"));
app.use("/express/api/users", users);
app.use("/express", home);
app.use("/express/about", about);

//assigning custom middleware function to our app
app.use(logger);

module.exports = app;
