const projectController = require('../controllers/project.controller.js');

const validatorHandler = require('../middlewares/validator.handler.js');

const { getProjectSchema, createProjectSchema, updateProjectSchema, deleteProjectSchema } = require('../schemas/project.schema.js');

const { Router } = require('express');

const router = Router();

router.get('/', projectController.getAllProjects);

router.get('/:id', validatorHandler(getProjectSchema, 'params') , projectController.getOneProject);

router.post('/', validatorHandler(createProjectSchema, 'body'), projectController.createProject);

router.patch('/:id', validatorHandler(getProjectSchema, 'params'), validatorHandler(updateProjectSchema,'body'));

router.delete('/:id', validatorHandler(deleteProjectSchema,'params'), projectController.deleteProject)

module.exports = router;