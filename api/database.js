var mysql = require('mysql');
const { HOST, USER, PASSWORD, DATABASE } = require("./config/index");

module.exports = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  multipleStatements: true // for multipleStatements support
});