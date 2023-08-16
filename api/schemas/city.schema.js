const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).messages({
  'string.base': 'El nombre de usuario debe ser un texto',
  'string.empty': 'El nombre de usuario no debe estar vacío',
  'string.min': 'El nombre de usuario debe tener al menos {#limit} caracteres'
});

const getCitySchema = Joi.object({
  id:id.required()
});

const createCitySchema = Joi.object({
  name: name.required()
});

const updateCitySchema = Joi.object({
  name: name
});

const deleteCitySchema = Joi.object({
  id:id.required()
});

module.exports = { getCitySchema, createCitySchema, updateCitySchema, deleteCitySchema};