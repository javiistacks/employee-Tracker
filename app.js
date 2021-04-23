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