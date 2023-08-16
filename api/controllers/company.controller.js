const CompanyServices = require('../services/company.services.js');
const service = new CompanyServices();

const getAllCompanies = async (req, res) => {
  const companies = await service.find();
  /* if (companies == '') {
    res.send('not elements');
  }; */
  res.json(companies);
};

const getOneCompany = async (req, res, next) => {
  try {
    const { id } = req.params
    const company = await service.findOne(id);
    res.json(company);
  } catch (error) {
    next(error);
  };
};

const createCompany = async(req, res, next) => {
  try {
    const body = req.body;
    const newCompany = await service.create(body);
    res.status(201).json(newCompany);
  } catch (error) {
    next(error);
  };
};

const updateCompany = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const companyUpdate = await service.update(id, body);
    res.json(companyUpdate);
  } catch (error) {
    next(error);
  };
};

const deleteCompany = async(req, res, next) => {
  try {
    const { id } = req.params;
    const companyDelete = await service.delete(id);
    res.json(companyDelete);
  } catch (error) {
    next(error);
  };
};

module.exports = { getAllCompanies, getOneCompany, createCompany, updateCompany, deleteCompany };