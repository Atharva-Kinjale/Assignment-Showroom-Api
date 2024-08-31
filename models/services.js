// -------------------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define(
    "Service",
    {
      service_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      serviceName: {
        type: DataTypes.STRING,
        defaultValue: null,
        unique: true,
      },
      timeRequired: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        //   allowNull: false,
      },
      cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "locations",
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
    }
  );

  // Associations
  Services.associate = function (models) {
    Services.belongsTo(models.Location, {
      foreignKey: "location",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Services.hasMany(models.Car_services, {
      foreignKey: "service_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Services.hasMany(models.Employee_services, {
      foreignKey: "service_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Services;
};
