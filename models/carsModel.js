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
        unique: {
          msg: "This car model is already in use",
        },
        validate: {
          notNull: { msg: "Car model is required" },
          notEmpty: { msg: "Car model cannot be empty" },
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: { msg: "Price is required" },
          isDecimal: { msg: "Price should be a valid decimal number" },
          min: { args: [0], msg: "Price must be a positive value" },
        },
      },
      manufactureYear: {
        type: DataTypes.DATE,
        validate: {
          isDate: { msg: "Manufacture Year must be a valid date" },
          isBefore: {
            args: [new Date().toISOString().slice(0, 10)],
            msg: "Manufacture Year cannot be in the future",
          },
        },
      },
      mileage: {
        type: DataTypes.DECIMAL,
        defaultValue: null,
        validate: {
          isDecimal: { msg: "Mileage should be a valid decimal number" },
          min: { args: [0], msg: "Mileage must be a positive value" },
        },
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "locations", // table name
        //   key: "pincode",
        // },
        validate: {
          notNull: { msg: "Location is required" },
          isInt: { msg: "Location must be a valid pincode" },
        },
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
      tableName: "cars",
    }
  );

  // Associations
  Car.associate = function (models) {
    Car.belongsTo(models.Location, {
      //modelNmae
      foreignKey: "location",
      as: "loc",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    // Car.hasMany(models.OrderDetails, {
    //   foreignKey: "car_Id",
    //   onDelete: "CASCADE",
    //   onUpdate: "CASCADE",
    // });
    //old
    Car.hasMany(models.OrderDetails, {
      foreignKey: "car_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    // Car.hasMany(models.Customer_car, {
    //   foreignkey: "car_Id",
    //   onDelete: "CASCADE",
    //   onUpdate: "CASCADE",
    // });
    Car.hasMany(models.Car_services, {
      foreignKey: "car_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Car;
};
