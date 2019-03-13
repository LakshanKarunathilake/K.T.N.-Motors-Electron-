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

exports.openConnection = () => {
  con.connect(err => {
    if (err) {
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
};

exports.closeConnection = () => {
  con.end(err => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
    console.error('An error occured while closing the db connection');
    console.log(err);
  });
};

exports.con = con;
