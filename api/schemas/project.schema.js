const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const budget = Joi.number();
const executionDate = Joi.date();
const isActive = Joi.number().integer()
const cityId = Joi.number().integer();
const companyId = Joi.number().integer();
const userId = Joi.number().integer();

const nameUser = Joi.string().min(3);  

const getProjectSchema = Joi.object({
  id: id.required(),
  
});

const createProjectSchema = Joi.object({
  name: name.required(),
  budget: budget.required(),
  executionDate: executionDate.required(),
  isActive: isActive.required(),
  cityId: cityId.required(),
  companyId: companyId.required(),
  user: Joi.object({
    name:nameUser.required()
  }),
});

const updateProjectSchema = Joi.object({
  name: name,
  budget: budget,
  executionDate: executionDate,
  isActive: isActive,
  cityId: cityId,
  companyId: companyId,
  userId: userId
});

const deleteProjectSchema = Joi.object({
  id: id.required()
});

module.exports = { getProjectSchema, createProjectSchema, updateProjectSchema, deleteProjectSchema };