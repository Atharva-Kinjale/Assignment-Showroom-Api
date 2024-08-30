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
        references: {
          model: "orderDetails",
          key: "order_Id",
        },
      },
      paymentType: {
        type: DataTypes.ENUM("cash", "online", "check", "loan"),
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.ENUM("success", "processing", "failed"),
        allowNull: false,
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
