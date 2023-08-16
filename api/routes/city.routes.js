const cityController = require('../controllers/city.controller.js');
const validatorHandler = require('../middlewares/validator.handler.js');
const { getCitySchema, createCitySchema, updateCitySchema, deleteCitySchema } = require('../schemas/city.schema.js');

const { Router} = require('express');

const router = Router();

router.get('/', cityController.getAllCities);

router.get('/:id', validatorHandler(getCitySchema, 'params'), cityController.getOneCity);

router.post('/', validatorHandler(createCitySchema, 'body'),cityController.createCity);

router.patch('/:id', validatorHandler(getCitySchema, 'params'), validatorHandler(updateCitySchema, ''), cityController.updateCity);

router.delete('/:id', validatorHandler(deleteCitySchema, 'params'),cityController.deleteCity);

module.exports = router;

