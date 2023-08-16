const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);

const getCompanySchema = Joi.object({
  id:id.required()
});

const createCompanySchema = Joi.object({
  name: name.required()
});

const updateCompanySchema = Joi.object({
  name: name
});

const deleteCompanySchema = Joi.object({
  id: id.required()
});

module.exports = { getCompanySchema, createCompanySchema, updateCompanySchema, deleteCompanySchema };