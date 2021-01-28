/* eslint-disable no-undef */
const express = require("express");
const app = express();
// eslint-disable-next-line no-undef
const express_file = require("./express/express");
// eslint-disable-next-line no-undef
const dotenv = require("dotenv").config();

app.use("/", express_file);

const setPort = dotenv.parsed.PORT || 3000;
app.listen(setPort, () => console.log(`Listening on port ${setPort}...`));
