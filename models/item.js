const Sequelize = require('sequelize');
const Category = require('../models/category');

const Item = global.sequelize.define('Item', {
  itemCode: Sequelize.STRING,
  categoryId: {
    type: Sequelize.INTEGER,
    references: { model: Category, key: 'name' }
  },
  vehicle: Sequelize.STRING,
  brand: Sequelize.STRING,
  description: Sequelize.STRING,
  stock: Sequelize.INTEGER,
  cost: Sequelize.DECIMAL,
  selling: Sequelize.DECIMAL
});

Item.hasOne(Category);

export default Item;
