// -----------------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const Customer_Car = sequelize.define(
    "Customer_car",
    {
      customer_car_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customer_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "customer",
          key: "customer_Id",
        },
      },
      car_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cars",
          key: "car_Id",
        },
      },
    },
    {
      paranoid: true,
      tableName: "customer_cars",
    }
  );

  // Associations
  Customer_Car.associate = function (models) {
    Customer_Car.belongsTo(models.Customer, {
      foreignKey: "customer_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Customer_Car.belongsTo(models.Car, {
      foreignKey: "car_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Customer_Car;
};
