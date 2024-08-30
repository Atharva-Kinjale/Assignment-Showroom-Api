// -----------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car", //model name
    {
      car_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      manufactureYear: {
        type: DataTypes.DATE,
      },
      mileage: {
        type: DataTypes.DECIMAL,
        defaultValue: null,
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "locations", // table name
          key: "pincode",
        },
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      paranoid: true,
      tableName: "cars",
    }
  );

  // Associations
  Car.associate = function (models) {
    Car.belongsTo(models.Location, {
      //modelNmae
      foreignKey: "location",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Car.hasMany(models.OrderDetails, {
      foreignkey: "car_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Car.hasMany(models.Customer_car, {
      foreignkey: "car_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Car.hasMany(models.Car_services, {
      foreignKey: "car_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Car;
};
