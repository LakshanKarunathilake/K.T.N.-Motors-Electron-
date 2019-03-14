const mysql = require('mysql');
const swal = require('sweetalert');
// First you need to create a connection to the db
// Add the credentials to access your database
const exports = (module.exports = {});

exports.openConnection = () => {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'prototype'
  });
  console.log('opening connection');
  con.connect(err => {
    if (err) {
      console.log('Error connecting to Db');
      swal(
        'Database Connection',
        'Can not establish connection between Database',
        'error'
      );
      return;
    }
    console.log('Connection established');
  });
  return con;
};

exports.closeConnection = con => {
  con.end(err => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
    console.error('An error occured while closing the db connection');
    console.log(err);
  });
};
