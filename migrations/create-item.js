module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('items', {
      itemCode: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING,
        references: { model: 'categories', key: 'name' }
      },
      vehicle: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.DECIMAL(10, 2)
      },
      selling: {
        type: Sequelize.DECIMAL(10, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('items')
};
