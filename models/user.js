const Sequelize = require('sequelize');

module.exports = global.sequelize.define('User', {
  userName: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
  password: { type: Sequelize.STRING }
});
