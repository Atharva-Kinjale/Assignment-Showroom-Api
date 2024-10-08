// -------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customer_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_Id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        // references: {
        //   model: "User",
        //   key: "user_Id",
        // },
        validate: {
          notNull: { msg: "User ID is required" },
          isInt: { msg: "User ID must be a valid integer" },
        },
      },
      createdBy: {
        type: DataTypes.INTEGER,

        validate: {
          isInt: { msg: "createdBy must be an integer" },
        },
      },
      updatedBy: {
        type: DataTypes.INTEGER,

        validate: {
          isInt: { msg: "updatedBy must be an integer" },
        },
      },
    },

    {
      paranoid: true,
      tableName: "customers",
    }
  );

  // Associations
  Customer.associate = function (models) {
    Customer.belongsTo(models.User, {
      foreignKey: "user_Id",
      as: "user",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Customer.hasMany(models.OrderDetails, {
      foreignKey: "customer_Id",
      as: "customer",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    // Customer.hasMany(models.Customer_car, {
    //   foreignKey: "customer_Id",
    //   onDelete: "CASCADE",
    //   onUpdate: "CASCADE",
    // });
  };

  return Customer;
};
