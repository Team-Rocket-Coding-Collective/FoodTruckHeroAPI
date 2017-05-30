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
    },
    description: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.TEXT,
    },
    cusineTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    diets: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    website: {
      type: DataTypes.STRING,
    },
    twitter: {
      type: DataTypes.STRING,
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