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
      tableName: "employees",
    }
  );

  // Associations
  Employee.associate = function (models) {
    Employee.belongsTo(models.User, {
      foreignKey: "user_Id",
      as: "user",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Employee.hasMany(models.OrderDetails, {
      foreignKey: "employee_Id",
      as: "emp",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Employee;
};
