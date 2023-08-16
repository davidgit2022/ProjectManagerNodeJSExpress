const { City, CitySchema } = require('./city.model.js');
const { Company, CompanySchema } = require('./company.model.js');
const { User, UserSchema } = require('./user.model.js');
const { Project, ProjectSchema } = require('../models/project.model.js');

function setupModels(sequelize) {
  City.init(CitySchema, City.config(sequelize));
  Company.init(CompanySchema, Company.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Project.init(ProjectSchema, Project.config(sequelize));

  User.associate(sequelize.models);
  Project.associate(sequelize.models);
  City.associate(sequelize.models);
  Company.associate(sequelize.models);
};

module.exports = setupModels;
