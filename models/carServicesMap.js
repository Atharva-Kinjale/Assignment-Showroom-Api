// --------------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const Car_Services = sequelize.define(
    "Car_services",
    {
      car_services_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      service_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "services",
        //   key: "service_Id",
        // },
        validate: {
          notNull: { msg: "Service ID is required" },
          isInt: { msg: "Service ID must be a valid integer" },
        },
      },
      car_Id: {
        type: DataTypes.INTEGER,
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
      isInService: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
        validate: {
          isIn: {
            args: [[0, 1]],
            msg: "isInService must be either 0 (false) or 1 (true)",
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
      tableName: "car_services",
    }
  );

  // Associations
  Car_Services.associate = function (models) {
    Car_Services.belongsTo(models.Car, {
      foreignKey: "car_Id",
      as: "car",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Car_Services.belongsTo(models.Service, {
      foreignKey: "service_Id",
      as: "services",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Car_Services;
};
