module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "users", //tablename
      {
        user_Id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        F_Name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        L_Name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Email: {
          type: Sequelize.STRING,
          unique: true,
          defaultValue: null,
        },
        Contact_No: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Gender: {
          type: Sequelize.ENUM("male", "female", "other"),
        },
        Pincode: {
          type: Sequelize.INTEGER,
          references: {
            model: "locations", //table name
            key: "pincode",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
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
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("users"); //tableName
  },
};
