// ----------------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      pincode: { type: DataTypes.INTEGER, primaryKey: true },
      city: { type: DataTypes.STRING, allowNull: false },
      State: { type: DataTypes.STRING, allowNull: false },
      Country: { type: DataTypes.STRING, allowNull: false },
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
      tableName: "locations",
    }
  );
  // Associations
  Location.associate = function (models) {
    Location.hasMany(models.User, {
      foreignKey: "Pincode",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Location.hasMany(models.Car, {
      foreignKey: "location",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Location.hasMany(models.Service, {
      foreignKey: "location",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Location.hasMany(models.OrderDetails, {
      foreignKey: "location",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Location;
};
