const _ = require('lodash');
const Joi = require('joi');

const employeeSchema = Joi.object({
  employee_name: Joi.string().min(2).max(100).required(),
  gender : Joi.string().lowercase().valid('male','female').required(),
  address_1: Joi.string().min(2).max(100).trim().regex(/^[a-z\d\s\-\.\,]*$/i).required(),
  city: Joi.string().min(1).max(100).required(),
  state: Joi.string().min(2).max(100).required(),
  country: Joi.number().integer().required(),
  is_active : Joi.boolean().default(true)

}).unknown(true);


const updateSchema = Joi.object({
  employee_name: Joi.string().min(2).max(100),
  gender : Joi.string().lowercase().valid('male','female'),
  address_1: Joi.string().min(2).max(100).trim().regex(/^[a-z\d\s\-\.\,]*$/i),
  city: Joi.string().min(1).max(100),
  state: Joi.string().min(2).max(100),
  country: Joi.number().integer(),
  is_active : Joi.boolean().default(true)

}).unknown(true);

module.exports = {
  employeeSchema, updateSchema
}
