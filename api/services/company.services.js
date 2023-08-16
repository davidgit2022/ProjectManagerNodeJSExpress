const { models } = require('../libs/sequelize.js');
const boom = require('@hapi/boom');

class CompanyServices {
  constructor(){}

  async find(){
    const companies = await models.Company.findAll();
    return companies;
  };

  async findOne(id){
    const company = await models.Company.findByPk(id, {
      include:['projects']
    });
    if (!company) {
      throw boom.notFound('not found company');
    };
    return company;
  };

  async create(data){
    const newCompany = await models.Company.create(data);
    return newCompany;
  };

  async update(id, changes){
    const cityUpdate = await this.findOne(id);
    const result = cityUpdate.update(changes);
    return result;
  };

  async delete(id){
    const cityDelete = await this.findOne(id);
    await cityDelete.destroy();
    return { id };
  };
};

module.exports = CompanyServices;