/* eslint-disable no-undef */
const express = require("express");
const app = express();
// eslint-disable-next-line no-undef
const app_file = require("./App/app");
// eslint-disable-next-line no-undef
const dotenv = require("dotenv").config();

app.use("/", app_file);

const setPort = dotenv.parsed.PORT || 3000;
app.listen(setPort, () => console.log(`Listening on port ${setPort}...`));
