import { con, closeConnection, openConnection } from './dbConnection';

// eslint-disable-next-line import/prefer-default-export
export const getUsers = () =>
  new Promise((resolve, reject) => {
    openConnection();
    con.query(
      'SELECT * FROM users',
      (err, rows) => {
        if (err) {
          console.log('An error ocurred performing the query.');
          console.log(err);
          reject(err);
        }
        resolve(rows);
      },
      () => closeConnection()
    );
  });
