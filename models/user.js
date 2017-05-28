'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: { 
      type: DataTypes.INTEGER 
    },
    email: { 
      type: DataTypes.STRING 
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.FoodTruck, { foreignKey: 'ownerId' });
      }
    }
  });
  return User;
};