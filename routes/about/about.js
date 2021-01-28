/* eslint-disable */
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Sprintx");
});

module.exports = router;
