'use strict';
module.exports = function(sequelize, DataTypes) {
  var FoodTruck = sequelize.define('FoodTruck', {
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
        FoodTruck.belongsTo(models.User, { foreignKey: 'ownerId' });
      }
    }
  });
  return FoodTruck;
};