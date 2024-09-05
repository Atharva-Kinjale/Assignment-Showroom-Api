// -------------------------------------------------------

module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "Payment",
    {
      payment_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_Id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        // references: {
        //   model: "orderDetails",
        //   key: "order_Id",
        // },
        validate: {
          notNull: { msg: "Order ID is required" },
          isInt: { msg: "Order ID must be a valid integer" },
        },
      },
      paymentType: {
        type: DataTypes.ENUM("cash", "online", "check", "loan"),
        allowNull: false,
        validate: {
          notNull: { msg: "Payment type is required" },
          isIn: {
            args: [["cash", "online", "check", "loan"]],
            msg: "Payment type must be one of: cash, online, check, loan",
          },
        },
      },
      paymentStatus: {
        type: DataTypes.ENUM("success", "processing", "failed"),
        allowNull: false,
        validate: {
          notNull: { msg: "Payment status is required" },
          isIn: {
            args: [["success", "processing", "failed"]],
            msg: "Payment status must be one of: success, processing, failed",
          },
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
      tableName: "payments",
    }
  );

  // Associations
  Payment.associate = function (models) {
    Payment.belongsTo(models.OrderDetails, {
      foreignKey: "payment_Id",
      as: "orderDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Payment;
};
