/* eslint-disable */
const express = require("express");
const routes = express.Router();
//Giving path to users page
const users = require("../routes/users/users");
//Giving path to home page
const home = require("../routes/home/home");
//Giving path to about page
const about = require("../routes/about/about");

//routes can get JSON data
routes.use(express.json());
//routes can get data in Key Value pair
routes.use(express.urlencoded({ extended: true }));

routes.use("/users", users);
routes.use("/", home);
routes.use("/about", about);

module.exports = routes;
