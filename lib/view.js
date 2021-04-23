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