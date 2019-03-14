import { getTableData } from '../../Databse/databaseCRUD';

// eslint-disable-next-line import/prefer-default-export
export const isAValidUser = userCredentials =>
  new Promise((resolve, reject) => {
    getTableData('users')
      .then(users => {
        const indexOfuser = users
          .map(element => element.user_name)
          .findIndex(element => element === userCredentials.name);
        // eslint-disable-next-line promise/always-return
        if (indexOfuser !== -1) {
          if (users[indexOfuser].password === userCredentials.password) {
            resolve('valid user');
          }
          resolve('incorrect password');
        }
        resolve('invalid user credentials');
      })
      .catch(err => {
        console.log('error in retreving the data');
        console.log(err);
        reject(err);
      });
  });
