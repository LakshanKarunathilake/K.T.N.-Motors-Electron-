import { closeConnection, openConnection } from './dbConnection';

export const getTableData = tableName =>
  new Promise((resolve, reject) => {
    const con = openConnection();
    con.query(
      `SELECT * FROM ${tableName}`,
      (err, rows) => {
        if (err) {
          console.log('An error ocurred performing the query.');
          console.log(err);
          reject(err);
        }
        resolve(rows);
      },
      () => closeConnection(con)
    );
  });

export const insertRecordToTable = (columns, values, tableName) => {
  const con = openConnection();
  let columnString = '';
  let valueString = '';
  columns.forEach((column, index) => {
    columnString += column;
    if (index !== columns.width) {
      columnString += ',';
    }
  });
  values.forEach((column, index) => {
    valueString += column;
    if (index !== columns.width) {
      valueString += ',';
    }
  });
  con.query(
    `INSERT INTO customers (${columnString}) VALUES (${valueString}) from ${tableName}`
  );
};
