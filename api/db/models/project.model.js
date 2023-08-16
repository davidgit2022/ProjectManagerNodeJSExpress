const { Model, DataTypes, Sequelize } = require('sequelize');

const { CITY_TABLE } = require('./city.model.js');
const { COMPANY_TABLE } = require('./company.model.js');
const { USER_TABLE } = require('./user.model.js');

const PROJECT_TABLE = 'projects';

const ProjectSchema = {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  budget: {
    allowNull: false,
    type: DataTypes.DECIMAL,
    defaultValue: 0
  },

  executionDate:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'execution_date'
  },

  isActive: {
    allowNull: false,
    type: DataTypes.SMALLINT,
    field: 'is_active',
    defaultValue: 0
  },

  cityId:{
    allowNull: false,
    field: 'city_id',
    type: DataTypes.INTEGER,
    references: {
      model: CITY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  companyId:{
    allowNull: false,
    field: 'company_id',
    type: DataTypes.INTEGER,
    references: {
      model: COMPANY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  userId : {
    allowNull: false,
    unique: true,
    field: 'user_id',
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }

};

class Project extends Model {
  static associate(models){
    this.belongsTo(models.User, {as : 'user'});
    this.belongsTo(models.City, {as : 'city'});
    this.belongsTo(models.Company, {as : 'company'});
    
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: PROJECT_TABLE,
      modelName: 'Project',
      timestamps: false
    };
  };
};

module.exports = {PROJECT_TABLE, ProjectSchema, Project};
