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
        // references: {
        //   model: "employees",
        //   key: "employee_Id",
        // },
        validate: {
          notNull: { msg: "Employee ID is required" },
          isInt: { msg: "Employee ID must be a valid integer" },
        },
      },
      customer_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "customers",
        //   key: "customer_Id",
        // },
        validate: {
          notNull: { msg: "Customer ID is required" },
          isInt: { msg: "Customer ID must be a valid integer" },
        },
      },
      car_Id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        // references: {
        //   model: "cars",
        //   key: "car_Id",
        // },
        validate: {
          notNull: { msg: "Car ID is required" },
          isInt: { msg: "Car ID must be a valid integer" },
        },
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: { msg: "Amount is required" },
          isDecimal: { msg: "Amount must be a valid decimal" },
          min: {
            args: [0],
            msg: "Amount must be a positive number",
          },
        },
      },
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Order date is required" },
          isDate: { msg: "Order date must be a valid date" },
        },
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "location",
        //   key: "pincode",
        // },
        validate: {
          notNull: { msg: "Location is required" },
          isInt: { msg: "Location must be a valid integer" },
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
      tableName: "orderDetails",
    }
  );

  // Associations
  OrderDetails.associate = function (models) {
    OrderDetails.belongsTo(models.Location, {
      foreignKey: "location",
      as: "loc",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    OrderDetails.belongsTo(models.Employee, {
      foreignKey: "employee_Id",
      as: "emp",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    OrderDetails.belongsTo(models.Customer, {
      foreignKey: "customer_Id",
      as: "cust",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    OrderDetails.belongsTo(models.Car, {
      foreignKey: "car_Id",
      as: "car",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    //new
    // OrderDetails.belongsTo(models.Car, {
    //   foreignKey: "car_Id",
    //   onDelete: "CASCADE",
    //   onUpdate: "CASCADE",
    // });
    OrderDetails.hasOne(models.Payment, {
      foreignKey: "payment_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return OrderDetails;
};
