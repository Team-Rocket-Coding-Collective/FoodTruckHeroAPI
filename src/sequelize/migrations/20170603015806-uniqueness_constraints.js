'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      BEGIN;
        ALTER TABLE \"FoodTrucks\" ADD CONSTRAINT unique_name UNIQUE (name);
        ALTER TABLE \"Users\" ADD CONSTRAINT unique_email UNIQUE (email);
      COMMIT;
      `);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`BEGIN;
      ALTER TABLE \"FoodTrucks\" DROP CONSTRAINT unique_name;
      ALTER TABLE \"Users\" DROP CONSTRAINT unique_email;
    COMMIT
    `);
  }
};
