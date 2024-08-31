// ------------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const OrderDetails = sequelize.define(
    "OrderDetails",
    {
      order_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "employees",
          key: "employee_Id",
        },
      },
      customer_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "customers",
          key: "customer_Id",
        },
      },
      car_Id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: "cars",
          key: "car_Id",
        },
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "location",
          key: "pincode",
        },
      },
      createdBy: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      updatedBy: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      paranoid: true,
      tableName: "orderDetails",
    }
  );

  // Associations
  OrderDetails.associate = function (models) {
    OrderDetails.belongsTo(models.Location, {
      foreignKey: "location",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    OrderDetails.belongsTo(models.Employee, {
      foreignKey: "employee_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    OrderDetails.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    OrderDetails.belongsTo(models.Car, {
      foreignKey: "car_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    OrderDetails.hasOne(models.Payment, {
      foreignKey: "payment_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return OrderDetails;
};
