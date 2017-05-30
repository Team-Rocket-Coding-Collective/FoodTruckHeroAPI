'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query("TRUNCATE \"FoodTrucks\";;").then(() => {
      return queryInterface.addColumn('FoodTrucks', 'latitude', {
        type: Sequelize.FLOAT,
        allowNull: false,
    })
  }).then(
      () => {queryInterface.addColumn('FoodTrucks', 'longitude', {
        type: Sequelize.FLOAT,
        allowNull: false,        
      })}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('FoodTrucks', 'latitude').then(
      () => {queryInterface.removeColumn('FoodTrucks', 'longitude')}
    );
  }
};
