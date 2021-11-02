const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/', controllers.createEmployee);

router.get('/', controllers.getAllEmployees);

router.get('/:id', controllers.getEmployeeById);

router.put('/:id', controllers.updateEmployee);

router.delete('/:id', controllers.deleteEmployee);

module.exports = router;