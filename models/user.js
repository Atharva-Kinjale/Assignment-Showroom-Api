module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      F_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "First Name is required" },
          notEmpty: { msg: "First Name cannot be empty" },
          isAlpha: { msg: "First Name should only contain letters" },
        },
      },
      L_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Last Name is required" },
          notEmpty: { msg: "Last Name cannot be empty" },
          isAlpha: { msg: "Last Name should only contain letters" },
        },
      },
      Email: {
        type: DataTypes.STRING,
        defaultValue: null,
        unique: { args: true, msg: "This email is already in use" },
      },
      Contact_No: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "unique contact_No",
          msg: "This Contact_No is already in use",
        },
        validate: {
          notNull: { msg: "Contact Number is required" },
          notEmpty: { msg: "Contact Number cannot be empty" },
          unique: {
            name: "unique contact_No",
            msg: "This Contact_No is already in use",
          },
          isNumeric: { msg: "Contact Number should only contain numbers" },
          len: {
            args: [10, 10],
            msg: "Contact Number should be 10 digits long",
          },
        },
      },
      Gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        validate: {
          isIn: {
            args: [["male", "female", "other"]],
            msg: "Gender must be 'male', 'female', or 'other'",
          },
        },
      },
      Pincode: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: { msg: "Pincode should only contain numbers" },
          len: { args: [6, 6], msg: "Pincode should be exactly 6 digits long" },
        },
      },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Location, {
      foreignKey: "Pincode",
      as: "location",
    });
    User.hasOne(models.Customer, {
      foreignKey: "user_Id",
      as: "customer",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    User.hasOne(models.Employee, {
      foreignKey: "user_Id",
      as: "employee",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return User;
};
