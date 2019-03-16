import CONFIGS from '../../config/config.json';

const mysql = require('mysql');
const swal = require('sweetalert');
// First you need to create a connection to the db
// Add the credentials to access your database
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const { database, username, password, dialect } = CONFIGS.development;
const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect
});
global.sequelize = sequelize;

export const openConnection = () => {
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

export const closeConnection = con => {
  con.end(err => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
    console.error('An error occured while closing the db connection');
    console.log(err);
  });
};
