const CityServices = require('../services/city.services.js');

const service = new CityServices();

const getAllCities = async (req, res) => {
  const cities = await service.find();
  /* if (cities == '') {
    res.send('not elements');
  }; */
  res.json(cities);
};

const getOneCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const city = await service.findOne(id);
    res.json(city);
  } catch (error) {
    next(error);
  };
};

const createCity = async (req, res, next) => {
  try {
    const body = req.body;
    const newCity = await service.create(body);
    res.status(201).json(newCity);
  } catch (error) {
    next(error);
  };
};

const updateCity = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const cityUpdate = await service.update(id, body);
    res.json(cityUpdate);
  } catch (error) {
    next(error);
  };
};

const deleteCity = async(req, res, next) => {
  try {
    const {id} = req.params;
    const cityDelete = await service.delete(id);
    res.json(cityDelete);
  } catch (error) {
    next(error)
  };
};

module.exports = { getAllCities, getOneCity, createCity, updateCity, deleteCity };