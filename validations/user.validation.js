const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
    body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
    birthday: Joi.date().required(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    //firstname: Joi.string().required(),
    //lastname: Joi.string().required(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
   // id: Joi.string().custom(objectId),
    id: Joi.number().integer(),
    
  }),
};

const updateUser = {
  params: Joi.object().keys({
    //id: Joi.required().custom(objectId),
    id: Joi.number().integer(),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      firstname: Joi.string(),
      lastname: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    //id: Joi.string().custom(objectId),
    id:  Joi.number().integer(),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
