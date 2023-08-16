const express = require('express');
const userRouter = require('../routes/user.routes.js');
const projectRouter = require('../routes/project.routes.js');
const cityRouter = require('../routes/city.routes.js');
const companyRouter = require('../routes/company.routes.js');

function apiRouter(app) {
  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/users', userRouter);
  router.use('/projects', projectRouter);
  router.use('/cities', cityRouter);
  router.use('/companies', companyRouter);
};

module.exports = apiRouter;