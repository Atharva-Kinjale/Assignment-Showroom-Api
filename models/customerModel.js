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
      foreignKey: "customer_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Customer.hasMany(models.Customer_car, {
      foreignKey: "customer_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Customer;
};
