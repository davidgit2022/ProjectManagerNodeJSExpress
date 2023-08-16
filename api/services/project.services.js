const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ProjectServices {
  constructor(){}

  async find(){
    const projects = await models.Project.findAll({
      include:['city', 'company', 'user'],
    });
    return projects;
  };

  async findOne(id){
    const projects = await models.Project.findByPk(id);
    if (!projects) {
      throw boom.notFound('not found project');
    };
    return projects;
  };

  async create(data){
    const newProject = await models.Project.create(data, {
      include:['user'],
    });
    return newProject;
  };

  async update(id, changes){
    const projectUpdate = await this.findOne(id);
    const result = projectUpdate.update(changes);
    return result;
  };

  async delete(id){
    const projectDelete = await this.findOne(id);
    await projectDelete.destroy();
    return { id };
  };

}

module.exports = ProjectServices;