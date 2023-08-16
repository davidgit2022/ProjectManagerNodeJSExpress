const { models } = require('../libs/sequelize.js');
const boom = require('@hapi/boom');

class UserServices {
  constructor() { };

  async find() {
    const users = await models.User.findAll({
      include: ['project']
    });
    return users;
  };

  async findOne(id) {
    const user = await models.User.findByPk(id);

    if (!user) {
      throw boom.notFound('user not found');
    };

    return user;
  };

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  };

  async update(id, changes) {
    const userUpdate = await this.findOne(id);
    const result = await userUpdate.update(changes);
    return result;
  };

  async delete(id) {
    const userDelete = await this.findOne(id);
    await userDelete.destroy();
    return { id };
  }
};

module.exports = UserServices;