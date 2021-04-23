// DEPENDENCIES - Required NOM Modules
// ==============================================================================
const inquirer = require("inquirer");

// ==============================================================================
// FUNCTIONS - BONUS

module.exports = {
  deleteEmployee: function (connection, start) {
    connection.query("SELECT * FROM employees", function (err, employeeData) {
      var allEmployees = employeeData.map((employee) => employee.first_name + " " + employee.last_name);

      inquirer.prompt([
        {
          name: "employee",
          type: "list",
          message: "Select the employee to delete?",
          choices: allEmployees,
        },
      ])
      .then((response) => {
        var employeeObj = employeeData.find((employees) => employees.first_name + " " + employees.last_name === response.employee);
        
        connection.query("DELETE FROM employees WHERE id=?", [employeeObj.id], function (err) {
          if (err) throw err;
          console.log(" ");
          console.log("Employee Deleted!");
          console.log(" ");
          start();
        });
      });
    });
  },

  deleteRole: function (connection, start) {
    connection.query("SELECT * FROM roles", function (err, roleData) {
      var allRoles = roleData.map((roles) => roles.title);

      inquirer.prompt([
        {
          name: "title",
          type: "list",
          message: "Select the role to be deleted?",
          choices: allRoles,
        },
      ])
      .then((response) => {
        var roleObj = roleData.find((role) => role.title === response.title);

        connection.query("DELETE FROM roles WHERE id=?", [roleObj.id], function (err) {
          if (err) throw err;
          console.log(" ");
          console.log("Role Deleted!");
          console.log(" ");
          start();
        });
      });
    });
  },

  deleteDept: function (connection, start) {
    connection.query("SELECT * FROM departments", function (err, deptData) {
      var allDept = deptData.map((departments) => departments.dept_name);

      inquirer.prompt([
        {
          name: "dept",
          type: "list",
          message: "Select the department to be deleted?",
          choices: allDept,
        },
      ])
      .then((response) => {
        var deptObj = deptData.find((dept) => dept.dept_name === response.dept);

        connection.query("DELETE FROM departments WHERE id=?", [deptObj.id], function (err) {
          if (err) throw err;
          console.log(" ");
          console.log("Department Deleted!");
          console.log(" ");
          start();
        });
      });
    });
  },
  
};