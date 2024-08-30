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
        references: {
          model: "services",
          key: "service_id",
        },
      },
      car_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cars",
          key: "car_id",
        },
      },
      isInService: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
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
      foreignKey: "car_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Car_Services.belongsTo(models.Service, {
      foreignKey: "service_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Car_Services;
};
