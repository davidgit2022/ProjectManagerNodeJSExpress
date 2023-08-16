const companyController = require('../controllers/company.controller.js');

const validatorHandler = require('../middlewares/validator.handler.js');

const { getCompanySchema, createCompanySchema, updateCompanySchema, deleteCompanySchema } = require('../schemas/company.schema.js');

const { Router } = require('express');

const router = Router();

router.get('/', companyController.getAllCompanies);

router.get('/:id', validatorHandler(getCompanySchema, 'params'), companyController.getOneCompany);

router.post('/', validatorHandler(createCompanySchema, 'body'), companyController.createCompany);

router.patch('/:id', validatorHandler(getCompanySchema, 'params'), validatorHandler(updateCompanySchema, 'body'),companyController.updateCompany);

router.delete('/:id',validatorHandler(deleteCompanySchema, 'params'), companyController.deleteCompany);

module.exports = router;