const { Model, DataTypes, Sequelize } = require('sequelize');

const COMPANY_TABLE = 'companies';

const CompanySchema = {
  
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING
  },

  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
};

class Company extends Model{
  static associate(models){
    this.hasMany(models.Project, {
      as: 'projects',
      foreignKey: 'companyId'
    });
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: COMPANY_TABLE,
      modelName: 'Company',
      timestamps: false,
    };
  };
};

module.exports = { COMPANY_TABLE, CompanySchema, Company };