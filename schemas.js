const Joi = require('joi');


const id = Joi.number().integer().required();

const employee_name = Joi.string().min(3).max(30).required();

const address_1 = Joi.string().min(5).max(30).required();

const address_2 = Joi.string().min(5).max(30).required();

const gender = Joi.string().min(1).max(10).required();

const city = Joi.string().min(3).max(30).required();

const state = Joi.string().min(3).max(30).required();

const country = Joi.number().integer().required();

const employeeDataSchema = Joi.object().keys({
  id: id,
  employee_name: employee_name,
  address_1: address_1,
  address_2: address_2,
  gender: gender,
  city: city,
  state: state,
  country: country
})
