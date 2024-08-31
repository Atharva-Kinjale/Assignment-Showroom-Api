// -----------------------------------------------------------

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      F_Name: { type: DataTypes.STRING, allowNull: false },
      L_Name: { type: DataTypes.STRING, allowNull: false },
      Email: { type: DataTypes.STRING, defaultValue: null, unique: true },
      Contact_No: { type: DataTypes.STRING, allowNull: false },
      Gender: { type: DataTypes.ENUM("male", "female", "other") },
      Pincode: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "Location",
        //   key: "pincode",
        // },
      },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      tableName: "users",
    }
  );

  // Associations
  User.associate = function (models) {
    User.belongsTo(models.Location, {
      foreignKey: "Pincode",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    User.hasOne(models.Customer, {
      foreignKey: "user_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    User.hasOne(models.Employee, {
      foreignKey: "user_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return User;
};
