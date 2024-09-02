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
      tableName: "payments",
    }
  );

  // Associations
  Payment.associate = function (models) {
    Payment.belongsTo(models.OrderDetails, {
      foreignKey: "payment_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Payment;
};
