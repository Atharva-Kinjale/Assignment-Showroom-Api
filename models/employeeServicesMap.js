// -----------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const Employee_Services = sequelize.define(
    "Employee_services",
    {
      employee_services_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "employees",
        //   key: "employee_id",
        // },
        validate: {
          notNull: { msg: "Employee ID is required" },
          isInt: { msg: "Employee ID must be a valid integer" },
        },
      },
      service_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "services",
        //   key: "service_id",
        // },
        validate: {
          notNull: { msg: "Service ID is required" },
          isInt: { msg: "Service ID must be a valid integer" },
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
      tableName: "employee_services",
    }
  );

  // Associations
  Employee_Services.associate = function (models) {
    Employee_Services.belongsTo(models.Service, {
      foreignKey: "service_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Employee_Services.belongsTo(models.Employee, {
      foreignKey: "employee_Id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Employee_Services;
};
