/* 
* Controller for requests to the server. Allows for create, get(s), updates and deletes. 
* Based off  variables in the Model.
*/

const Employee = require("../models/employee-model");

// Create

createEmployee = (req, res) => {
  const body = req.body;

  var keyName1 = req.body;
  console.log(keyName1);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a employee",
    });
  }

  const employee = new Employee(body);

  if (!employee) {
    return res.status(400).json({ success: false, error: err });
  }

  employee
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: employee._id,
        message: "Employee created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Employee not created!",
      });
    });
};

// Update

updateEmployee = async (req, res) => {
    const body = req.body;
  
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update",
      });
    }
  
    Employee.findOne({ _id: req.params.id }, (err, employee) => {
      if (err) {
        return res.status(404).json({
          err,
          message: "Employee not found!",
        });
      }
      employee.fname = body.fname;
      employee.lname = body.lname;
      employee.department = body.department;
      employee.role = body.role;
      employee.year_joined = body.year_joined;
      employee.email = body.email;
      employee.cell = body.cell;
      employee.state = body.state;
      employee.photo = body.photo;
      employee.status = body.status;
      employee
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: employee._id,
            message: "Employee updated!",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Employee not updated!",
          });
        });
    });
  };

  // Delete

  deleteEmployee = async (req, res) => {
    await Employee.findOneAndDelete({ _id: req.params.id }, (err, employee) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      if (!employee) {
        return res.status(404).json({ success: false, error: `Employee not found` });
      }
  
      return res.status(200).json({ success: true, data: employee });
    }).catch((err) => console.log(err));
  };
  

  // ID get
  getEmployeeById = async (req, res) => {
    await Employee.findOne({ _id: req.params.id }, (err, employee) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      if (!employee) {
        return res.status(404).json({ success: false, error: `Employee not found` });
      }
      return res.status(200).json({ success: true, data: employee });
    }).catch((err) => console.log(err));
  };

  // Get All

getEmployees = async (req, res) => {
    await Employee.find({}, (err, employees) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!employees.length) {
        return res.status(404).json({ success: false, error: `Employee not found` });
      }
      return res.status(200).json({ success: true, data: employees });
    }).catch((err) => console.log(err));
  };

  getEmployeeImages = async (req, res) => {
    await Employee.find( {photo:1, _id:0}, (err, employees) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!employees.length) {
        return res.status(404).json({ success: false, error: `Employee not found` });
      }
      return res.status(200).json({ success: true, data: employees });
    }).catch((err) => console.log(err));
  };




module.exports = {
    createEmployee,
    getEmployees,
    updateEmployee,
    getEmployeeById,
    deleteEmployee,
    getEmployeeImages
  };
  