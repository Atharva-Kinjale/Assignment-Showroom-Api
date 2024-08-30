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
        references: {
          model: "employees",
          key: "employee_id",
        },
      },
      service_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "services",
          key: "service_id",
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
