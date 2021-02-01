/* eslint-disable */

const winston = require("winston");
const { err } = require("./error");
module.exports = () => {
  process.on("unhandledRejection", (exception) => {
    throw exception;
  });
  winston.add(
    new winston.transports.File({
      filename: "logfile.log",
      level: "error",
      // message: winston.error(err),
      handleExceptions: true,
    })
  );
};
