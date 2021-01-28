/* eslint-disable */

//require winston
const winston = require("winston");
// logger configuration
const logConfiguration = {
  transports: [new winston.transports.Console()],
};

//Crete logger
const logger = winston.createLogger(logConfiguration);

//log a message
logger.log({
  message: "Hello, World",
  level: "info",
});

// log a message
//  logger.info("Hello, World");
// function log(req, res, next) {
//   console.log("Logging...");
//   next();
// }

module.exports = logger;
