const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {

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

class User extends Model {
  static associate(models){
    this.hasOne(models.Project, {
      as: 'project',
      foreignKey: 'userId'
    })
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    };
  };
};

module.exports = { USER_TABLE, UserSchema, User };