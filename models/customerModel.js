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
        type: DataTypes.STRING,
        defaultValue: null,
        validate: {
          isAlpha: { msg: "createdBy should only contain letters" },
          len: {
            args: [3, 50],
            msg: "createdBy should be between 3 to 50 characters",
          },
        },
      },
      updatedBy: {
        type: DataTypes.STRING,
        defaultValue: null,
        validate: {
          isAlpha: { msg: "updatedBy should only contain letters" },
          len: {
            args: [3, 50],
            msg: "updatedBy should be between 3 to 50 characters",
          },
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
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Customer.hasMany(models.OrderDetails, {
      foreignKey: "customer_Id",
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
