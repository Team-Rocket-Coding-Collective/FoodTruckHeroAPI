'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(function handleTransaction (t) {
        return Promise.all([
          queryInterface.addColumn('FoodTrucks', 'description', Sequelize.TEXT, {transaction: t}),
          queryInterface.addColumn('FoodTrucks', 'location', Sequelize.TEXT, {transaction: t}),
          queryInterface.addColumn('FoodTrucks', 'cusineTypes', Sequelize.ARRAY(Sequelize.STRING), {transaction: t}),
          queryInterface.addColumn('FoodTrucks', 'diets', Sequelize.ARRAY(Sequelize.STRING), {transaction: t}),
          queryInterface.addColumn('FoodTrucks', 'tags', Sequelize.TEXT, {transaction: t}),
          queryInterface.addColumn('FoodTrucks', 'website', Sequelize.TEXT, {transaction: t}),
          queryInterface.addColumn('FoodTrucks', 'twitter', Sequelize.TEXT, {transaction: t}),
        ]);
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.sequelize.transaction(function handleTransaction (t) {
        return Promise.all([
          queryInterface.removeColumn('FoodTrucks', 'description', {transaction: t}),
          queryInterface.removeColumn('FoodTrucks', 'location', {transaction: t}),
          queryInterface.removeColumn('FoodTrucks', 'cusineTypes', {transaction: t}),
          queryInterface.removeColumn('FoodTrucks', 'diets', {transaction: t}),
          queryInterface.removeColumn('FoodTrucks', 'tags', {transaction: t}),
          queryInterface.removeColumn('FoodTrucks', 'website', {transaction: t}),
          queryInterface.removeColumn('FoodTrucks', 'twitter', {transaction: t}),
        ]);
      });
  }
};
