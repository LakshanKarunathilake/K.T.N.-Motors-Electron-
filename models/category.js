import Sequelize from 'sequelize';

const Category = global.sequelize.define(
  'category',
  {
    name: Sequelize.STRING
  },
  {}
);

export default Category;
