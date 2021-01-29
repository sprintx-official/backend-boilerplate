/* eslint-disable */
const express = require("express");
const app = express();
const app_file = require("./App/app");
const dotenv = require("dotenv").config();

app.use("/", app_file);

const setPort = dotenv.parsed.PORT || 3000;
app.listen(setPort, () => console.log(`Listening on port ${setPort}...`));
