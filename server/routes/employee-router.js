const express = require('express')

const EmployeeCtrl = require('../controllers/employee-ctrl')

const router = express.Router()

router.get('/employees',EmployeeCtrl.getEmployees)
router.post('/employee', EmployeeCtrl.createEmployee)
//router.put('/employee/:id', EmployeeCtrl.updateEmployee)
//router.delete('/employee/:id', EmployeeCtrl/deleteEmployee)
//router.get('/employee/:id', EmployeeCtrl.getEmployeeById)


module.exports = router