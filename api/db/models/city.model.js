const { Model, DataTypes, Sequelize } = require('sequelize');

const CITY_TABLE = 'cities';
const CitySchema = {

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
    field: 'create_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
};

class City extends Model{
  static associate(models){
    this.hasMany(models.Project, {
      as: 'projects',
      foreignKey: 'cityId'
    });
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: CITY_TABLE,
      modelName: 'City',
      timestamps: false
    };
  };
};

module.exports = { CITY_TABLE, CitySchema, City };