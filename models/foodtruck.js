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
    latitude: {
      type: DataTypes.FLOAT,
    },
    longitude: {
      type: DataTypes.FLOAT,
    }
  }, {
    classMethods: {
      associate: function(models) {
        FoodTruck.belongsTo(models.User, { foreignKey: 'ownerId', as: 'owner' });
      }
    }
  });
  return FoodTruck;
};