const mysql = require('mysql');

// First you need to create a connection to the db
// Add the credentials to access your database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'prototype'
});

const exports = (module.exports = {});

con.connect(err => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// Perform a query

con.query('SELECT * FROM users', (err, rows) => {
  if (err) {
    console.log('An error ocurred performing the query.');
    console.log(err);
    return;
  }
  console.log('Query succesfully executed', rows);
  return rows;
});

exports.getUsers = () => {
  con.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.log('An error ocurred performing the query.');
      console.log(err);
      return;
    }
    console.log('Query succesfully executed', rows);
    return rows;
  });
};

// eslint-disable-next-line no-unused-vars
con.end(err => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
