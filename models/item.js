const Sequelize = require('sequelize');

module.exports = global.sequelize.define('item', {
  itemCode: Sequelize.STRING,
  category: Sequelize.STRING,
  vehicle: Sequelize.STRING,
  brand: Sequelize.STRING,
  description: Sequelize.STRING,
  stock: Sequelize.INTEGER,
  cost: Sequelize.DECIMAL,
  selling: Sequelize.DECIMAL
});
