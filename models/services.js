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
        validate: {
          len: {
            args: [3, 100],
            msg: "Service name must be between 3 and 100 characters",
          },
          notEmpty: {
            msg: "Service name cannot be empty",
          },
        },
      },
      timeRequired: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: { msg: "Time required is mandatory" },
          isDate: { msg: "Time required must be a valid time" },
        },
      },
      description: {
        type: DataTypes.TEXT,
        //   allowNull: false,
        validate: {
          len: {
            args: [10, 1000],
            msg: "Description must be between 10 and 1000 characters",
          },
        },
      },
      cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: { msg: "Cost is mandatory" },
          isDecimal: { msg: "Cost must be a valid decimal value" },
        },
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "locations",
        //   key: "pincode",
        // },
        validate: {
          notNull: { msg: "Location is required" },
          isInt: { msg: "Location must be a valid integer" },
        },
      },
      createdBy: {
        type: DataTypes.STRING,
        defaultValue: null,
        validate: {
          isAlpha: { msg: "CreatedBy should only contain letters" },
          len: {
            args: [3, 50],
            msg: "CreatedBy should be between 3 to 50 characters",
          },
        },
      },
      updatedBy: {
        type: DataTypes.STRING,
        defaultValue: null,
        validate: {
          isAlpha: { msg: "UpdatedBy should only contain letters" },
          len: {
            args: [3, 50],
            msg: "UpdatedBy should be between 3 to 50 characters",
          },
        },
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
