const ProjectServices = require('../services/project.services.js');

const service = new ProjectServices();

const getAllProjects = async(req, res) => {
  const projects = await service.find();
  /* if (projects == '') {
    res.send('not elements');
  }; */
  res.send(projects);
};

const getOneProject = async(req, res, next) => {
  try {
    const { id } = req.params;
    const project = await service.findOne(id);
    res.json(project);
  } catch (error) {
    next(error);
  };
};

const createProject = async(req, res, next) => {
  try {
    const body = req.body;
    const newProject = await service.create(body);
    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  };
};

const updateProject = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const projectUpdate = await service.update(id, body);
    res.json(projectUpdate) ;
  } catch (error) {
    next(error);
  };
};

const deleteProject = async(req, res, next) => {
  try {
    const { id } = req.params;
    const projectDelete = await service.delete(id);
    res.json(projectDelete);
  } catch (error) {
    next(error);
  };
};

module.exports = { getAllProjects, getOneProject , createProject, updateProject, deleteProject  };