// -------------------------------
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      employee_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_Id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        // references: {
        //   model: "users",
        //   key: "user_Id",
        // },
        validate: {
          notNull: { msg: "User ID is required" },
          isInt: { msg: "User ID must be a valid integer" },
        },
      },
      createdBy: {
        type: DataTypes.STRING,
        defaultValue: null,
        validate: {
          isAlpha: { msg: "createdBy should only contain letters" },
          len: {
            args: [3, 50],
            msg: "createdBy should be between 3 to 50 characters",
          },
        },
      },
      updatedBy: {
        type: DataTypes.STRING,
        defaultValue: null,
        validate: {
          isAlpha: { msg: "updatedBy should only contain letters" },
          len: {
            args: [3, 50],
            msg: "updatedBy should be between 3 to 50 characters",
          },
        },
      },
    },
    {
      paranoid: true,
      tableName: "employees",
    }
  );

  // Associations
  Employee.associate = function (models) {
    Employee.belongsTo(models.User, {
      foreignKey: "user_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Employee.hasMany(models.OrderDetails, {
      foreignKey: "employee_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Employee;
};
