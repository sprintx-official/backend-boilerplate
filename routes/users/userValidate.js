/* eslint-disable */
const Joi = require("joi");

// validate inputs with JOI
validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(user);
};

module.exports = validateUser;
