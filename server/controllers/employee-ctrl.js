const Employee = require("../models/employee-model");

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
  

module.exports = {
    createEmployee,
    getEmployees,
  };
  