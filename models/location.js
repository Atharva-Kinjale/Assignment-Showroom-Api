// // ----------------------------------------------------------
// module.exports = (sequelize, DataTypes) => {
//   const Location = sequelize.define(
//     "Location",
//     {
//       pincode: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         validate: {
//           isNumeric: true,
//           len: { args: [6, 6], msg: "Please enter 6 digit pincode" }, //  Pincodes with 6 digits
//         },
//       },
//       city: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           notNull: { msg: "City is required" },
//           notEmpty: { msg: "City cannot be empty" },
//           is: {
//             args: /^[a-zA-Z\s]+$/,
//             msg: "State should only contain letters and spaces",
//           },
//         },
//       },
//       State: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           notNull: { msg: "State is required" },
//           notEmpty: { msg: "State cannot be empty" },
//           is: {
//             args: /^[a-zA-Z\s]+$/,
//             msg: "State should only contain letters and spaces",
//           },
//         },
//       },
//       Country: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           notNull: { msg: "Country is required" },
//           notEmpty: { msg: "Country cannot be empty" },
//           is: {
//             args: /^[a-zA-Z\s]+$/,
//             msg: "State should only contain letters and spaces",
//           },
//         },
//       },
//       createdBy: {
//         type: DataTypes.STRING,
//         defaultValue: null,
//         validate: {
//           isAlpha: { msg: "createdBy should only contain letters" },
//           len: [3, 50], // Arbitrary length constraints
//         },
//       },
//       updatedBy: {
//         type: DataTypes.STRING,
//         defaultValue: null,
//         validate: {
//           isAlpha: { msg: "createdBy should only contain letters" },
//           len: [3, 50], // Arbitrary length constraints
//         },
//       },
//     },
//     {
//       paranoid: true,
//       tableName: "locations",
//     }
//   );
//   // Associations
//   Location.associate = function (models) {
//     Location.hasMany(models.User, {
//       foreignKey: "Pincode",
//       onDelete: "CASCADE",
//       onUpdate: "CASCADE",
//     });
// Location.hasMany(models.Car, {
//   foreignKey: "location",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// Location.hasMany(models.Service, {
//   foreignKey: "location",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// Location.hasMany(models.OrderDetails, {
//   foreignKey: "location",
//   as: "users",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
//   };
//   return Location;
// };

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      pincode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        validate: {
          isNumeric: true,
          len: { args: [6, 6], msg: "Please enter 6 digit pincode" },
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "City is required" },
          notEmpty: { msg: "City cannot be empty" },
          is: {
            args: /^[a-zA-Z\s]+$/,
            msg: "City should only contain letters and spaces",
          },
        },
      },
      State: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "State is required" },
          notEmpty: { msg: "State cannot be empty" },
          is: {
            args: /^[a-zA-Z\s]+$/,
            msg: "State should only contain letters and spaces",
          },
        },
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Country is required" },
          notEmpty: { msg: "Country cannot be empty" },
          is: {
            args: /^[a-zA-Z\s]+$/,
            msg: "Country should only contain letters and spaces",
          },
        },
      },
      createdBy: {
        type: DataTypes.STRING,
        defaultValue: null,
        validate: {
          isAlpha: { msg: "createdBy should only contain letters" },
          len: [3, 50],
        },
      },
      updatedBy: {
        type: DataTypes.STRING,
        defaultValue: null,
        validate: {
          isAlpha: { msg: "updatedBy should only contain letters" },
          len: [3, 50],
        },
      },
    },
    {
      paranoid: true,
      tableName: "locations",
    }
  );

  Location.associate = (models) => {
    Location.hasMany(models.User, {
      foreignKey: "Pincode",
      as: "user",
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
      as: "users",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Location;
};
