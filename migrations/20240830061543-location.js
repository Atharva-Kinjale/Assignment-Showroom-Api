module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("locations", {
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      State: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("locations");
  },
};
