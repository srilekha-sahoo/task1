'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    
    static associate(models) {
      Countries.hasMany(models.Employees, {foreignKey:'country'});
    }
  };
  Countries.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    country_name: {type: DataTypes.STRING(100)},
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }, 
    utc_created_at:{
      type: DataTypes.DATE,
      allowNull:false,
      defaultValue: new Date()
    },
    utc_updated_at:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Countries',
    timestamps: true,
    createdAt: 'utc_created_at',
    updatedAt: 'utc_updated_at'
  });
  
  return Countries;
};