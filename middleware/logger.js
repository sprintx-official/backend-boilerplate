/* eslint-disable */

const winston = require("winston");
const error = require("./error");
module.exports = () => {
  process.on("unhandledRejection", (exception) => {
    throw exception;
  });
  winston.add(
    new winston.transports.File({
      filename: "logfile.log",
      level: "error",
      handleExceptions: true,
    })
  );
};
