'use strict';
const { CITY_TABLE, CitySchema } = require('../models/city.model');
const { COMPANY_TABLE, CompanySchema } = require('../models/company.model');
const { USER_TABLE, UserSchema } = require('../models/user.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CITY_TABLE, CitySchema);
    await queryInterface.createTable(COMPANY_TABLE, CompanySchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CITY_TABLE);
    await queryInterface.dropTable(COMPANY_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};
