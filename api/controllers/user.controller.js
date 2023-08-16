const UserServices = require('../services/user.services.js')

const service = new UserServices();

const getAllUsers = async(req, res) => {
  const users = await service.find();
  /* if (users == '') {
    res.send('not elements');
  }; */
  res.json(users);
};

const getOneUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  };
};

const createUser = async(req, res, next) => {
  try {
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  };
};

const updateUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const userUpdate = await service.update(id, body);
    res.json(userUpdate) ;
  } catch (error) {
    next(error);
  };
};

const deleteUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const userDelete = await service.delete(id);
    res.json(userDelete);
  } catch (error) {
    next(error);
  };
};

module.exports = { getAllUsers, createUser, getOneUser, updateUser, deleteUser };

