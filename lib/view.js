// DEPENDENCIES - Required NOM Modules
// ==============================================================================
const table = require("console-table-printer");


// FUNCTIONS

module.exports = {
  viewAllDept: function (connection, start) {
    connection.query("SELECT id, dept_name AS Departments FROM departments;",
    function (err, data) {
      console.log(" ");
      table.printTable(data);
      console.log(" ");
      start();
    });
  },

  viewAllRoles: function (connection, start) {
    connection.query("SELECT id, title AS titles, salary FROM roles",
      function (err, data) {
        console.log(" ");
        table.printTable(data);
        console.log(" ");
        start();
      });
  },

  viewAllEmployees: function (connection, start) {
    connection.query(
        `SELECT e.id, e.first_name, e.last_name, title, dept_name AS department, salary,
         CONCAT (m.first_name, ' ', m.last_name) as manager
           FROM employees e
      LEFT JOIN employees m ON e.manager_id = m.id
      LEFT JOIN roles r ON e.role_id = r.id
      LEFT JOIN departments d ON d.id = dept_id;`,
      function (err, data) {
        console.log(" ");
        table.printTable(data);
        console.log(" ");
        start();
      });
  },