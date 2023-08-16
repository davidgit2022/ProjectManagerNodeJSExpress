const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).messages({
  'string.base': 'El nombre de usuario debe ser un texto',
  'string.empty': 'El nombre de usuario no debe estar vacío',
  'string.min': 'El nombre de usuario debe tener al menos {#limit} caracteres'
});

const getUserSchema = Joi.object({
  id: id.required()
});

const createUserSchema = Joi.object({
  name: name.required()
});

const updateUserSchema = Joi.object({
  name: name
});

const deleteUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema, deleteUserSchema };