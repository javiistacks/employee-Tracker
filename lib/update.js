/ DEPENDENCIES - Required NOM Modules
// ==============================================================================
const inquirer = require("inquirer");

// ==============================================================================
// FUNCTIONS

module.exports = {
  updateEmployeeRole: function (connection, start) {
    connection.query("SELECT * FROM employees", function (err, employeeData) {
    connection.query("SELECT * FROM roles", function (err, roleData) {
      var allEmployees = employeeData.map((employee) => employee.first_name + " " + employee.last_name);
      var allRoles = roleData.map((role) => role.title);

      inquirer
        .prompt([
          {
            name: "employee",
            type: "list",
            message: "Select an employee to update?",
            choices: allEmployees,
          },
          {
            name: "title",
            type: "list",
            message: "Select the employee's new role?",
            choices: allRoles,
          },
        ])
        .then((response) => {
          var employeeObj = employeeData.find((employees) => employees.first_name + " " + employees.last_name === response.employee);
          var roleObj = roleData.find((roles) => roles.title === response.title);

          connection.query("UPDATE employees SET role_id = ? WHERE id = ?", [roleObj.id, employeeObj.id], function (err) {
            if (err) throw err;
            console.log(" ");
            console.log("Employee Role Updated!");
            console.log(" ");
            start();
          });
        });
    });
    });
  },
  