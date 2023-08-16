const userController = require('../controllers/user.controller.js');
const validatorHandler = require('../middlewares/validator.handler.js');
const { createUserSchema, getUserSchema, updateUserSchema, deleteUserSchema } = require('../schemas/user.schema.js');

const { Router } = require('express');

const router = Router();

router.get('/', userController.getAllUsers);

router.get('/:id', validatorHandler(getUserSchema, 'params'), userController.getOneUser);

router.post('/', validatorHandler(createUserSchema, 'body'), userController.createUser);

router.patch('/:id', validatorHandler(getUserSchema, 'params'),  validatorHandler(updateUserSchema, 'body'), userController.updateUser);

router.delete('/:id', validatorHandler(deleteUserSchema, 'params'), userController.deleteUser);


module.exports = router;