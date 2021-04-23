// DEPENDENCIES - Required NPM Modules

const inquirer = require("inquirer");
const mysql = require("mysql");
const figlet = require('figlet');
const colors = require("colors");


const { viewAllDept, viewAllRoles, viewAllEmployees, viewEmployeesByMgr, viewTotalBudgetByDept } = require("./lib/view");
const { addDept, addRole, addEmployee } = require("./lib/add");
const { updateEmployeeRole, updateEmployeeMgr } = require("./lib/update");
const { deleteDept, deleteRole, deleteEmployee } = require("./lib/delete");

// ==============================================================================
// DATABASE - Create connection information for the SQL DB

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Leaders1354!",
  database: "employee_roster4",
});


connection.connect((err) => {
    if (err) throw err;
    figletStart();
    console.log(" ");
  });
  
  function start() {
    inquirer.prompt({
      name: "actions",
      type: "list",
      message: ("Please select one of the following actions."),
      choices: [
          "View All Employees"
        , "View All Roles"
        , "View All Departments"
        , "View Employees by Manager"
        // , "View Total Budget by Dept"
        , "Add Employee"
        , "Add Role"
        , "Add Department"
        , "Update Employee Role"
        , "Update Employee Manager"
        , "Delete Employee"
        , "Delete Role"
        , "Delete Department"
        , "Exit"
      ],
    })
    .then(userInput => {
      switch (userInput.actions) {
        case "View All Employees":
          viewAllEmployees(connection, start);
          break;
        case "View All Roles":
          viewAllRoles(connection, start);
          break;
        case "View All Departments":
          viewAllDept(connection, start);
          break;  
        case "View Employees by Manager":
          viewEmployeesByMgr(connection, start);
          break;
        // case "View Total Budget by Dept":
        //   viewTotalBudgetByDept(connection, start);
        //   break;
        case "Add Employee":
          addEmployee(connection, start);
          break;
        case "Add Role":
          addRole(connection, start);
          break;
        case "Add Department":
          addDept(connection, start);
          break;
        case "Update Employee Role":
          updateEmployeeRole(connection, start);
          break;
        case "Update Employee Manager":
          updateEmployeeMgr(connection, start);
          break;
        case "Delete Employee":
          deleteEmployee(connection, start);
          break;
        case "Delete Role":
          deleteRole(connection, start);
          break;
        case "Delete Department":
          deleteDept(connection, start);
          break;
        case "Exit":
          exitRoster();
          break;
      }
    });
  }

  const exitRoster = () => {
    console.log(" ");
    figletEnd();
    console.log(" ");
    connection.end();
  };