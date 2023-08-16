const { models } = require('../libs/sequelize.js');
const boom = require('@hapi/boom');

class CityServices {
  constructor(){}

  async find(){
    const cities = await models.City.findAll();
    return cities;
  };

  async findOne(id){
    const city = await models.City.findByPk(id, {
      include:['projects']
    });
    if (!city) {
      throw boom.notFound('not found city');
    };

    return city;
  };

  async create(data){
    const newCity = await models.City.create(data);
    return newCity;
  };

  async update(id, changes){
    const cityUpdate = await this.findOne(id);
    const result = cityUpdate.update(changes);
    return result;
  };

  async delete(id){
    const deleteCity = await this.findOne(id);
    await deleteCity.destroy();
    return { id };
  };
};

module.exports = CityServices;