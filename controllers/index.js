
const { Employees, Countries } = require('../models');

const {
    employeeSchema,
    updateSchema,
  } = require("../middlewares/schemaValidator.js");
  var lodash = require("lodash");


const createEmployee = async (req, res) => {
    try {
        const result = await employeeSchema.validateAsync(req.body);
        const countries = await Countries.findAll();
        const { country } = req.body;

        const countryId = lodash.findIndex(countries, ["id", country]);

        if (countryId !== -1) {
            const employee = await Employees.create(req.body);
        
            return res.status(201).json({
                employee,
            });
        } else {
            return res
                .status(404)
                .send("Country with this ID doesn't exists");
        } 
    } catch (error) {
        if (error.isJoi == true) {
            return res.status(422).json({ error: error.message });
        }
        return res.status(500).json({ error: error.message });
    }
}

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employees.findAll({
            where: {
                is_active: "true",
            },
        });
        return res.status(200).json({ employees });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employees.findOne({
            where: { 
                id: id,
                is_active: "true"
            },
        });
        if (employee) {
            return res.status(200).json({ employee });
        }
        return res.status(404).send('Employee with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};





const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateSchema.validateAsync(req.body);
        const { country } = req.body;

        if (country) {
            const countries = await Countries.findAll();
            const countryId = lodash.findIndex(countries, ["id", country]);

            if (countryId === -1) {
                return res.status(404).send("Country  with the specified ID value does not exist");
            }
        }

        const [updated] = await Employees.update(req.body, {
            where: { id: id },
        });
        if (updated) {
            const updatedEmployee = await Employees.findOne({ where: { id: id } });
            return res.status(200).json({ employee: updatedEmployee });
        }
        throw new Error('Employee not found');
        } catch (error) {
        if (error.isJoi === true) {
        return res.status(422).send(error.message);
        }
        return res.status(500).send(error.message);
    }
};





const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Employees.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(200).send("Employee deleted");
        }
        throw new Error("Employee not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}