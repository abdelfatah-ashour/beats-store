const Joi = require("joi");

function validRegister(data) {
  const Schema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    email: Joi.string().min(3).required().email(),
    password: Joi.string().min(8).max(12).required(),
  });
  const result = Schema.validate(data);
  return result;
}

function validLogin(data) {
  const Schema = Joi.object({
    email: Joi.string().min(3).required().email(),
    password: Joi.string().min(8).max(12).required(),
  });

  const result = Schema.validate(data);
  return result;
}

function validProduct(data) {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(52).required(),
    category: Joi.string().min(3).required(),
    brand: Joi.string().min(3).max(52).required(),
    color: Joi.string().min(3).max(52).required(),
    material: Joi.string().min(3).max(52).required(),
    price: Joi.number().required(),
    productType: Joi.string().min(3).max(52).required(),
    qty: Joi.number().required(),
    size: Joi.number().required(),
    productImages: Joi.array().min(2).max(4).required(),
  });

  return Schema.validate(data);
}

module.exports = {
  validRegister,
  validLogin,
  validProduct,
};
