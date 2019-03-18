import CATEGORIES from './datasets/Category.json';
import USERS from './datasets/User.json';

const Category = require('../../models/category');
const User = require('../../models/user');

/**
 * Loading the category model using existing dataset
 */
// eslint-disable-next-line no-unused-vars
const updateCategoryTable = () => {
  CATEGORIES.forEach(element => {
    Category.create({ name: element.CatName });
  });
};

/**
 * Loading the User model using existing dataset
 */
// eslint-disable-next-line no-unused-vars
const updateUserTable = () => {
  console.log('USERS :', USERS);
  USERS.forEach(element => {
    User.create({
      userName: element.user_name,
      password: element.password
    });
  });
};
// updateCategoryTable();
// updateUserTable();
