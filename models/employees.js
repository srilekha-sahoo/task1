'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const currentTime = new Date(new Date().toUTCString()).toISOString();
  class Employees extends Model {
    static associate(models) {
      Employees.associate = models =>{
        Employees.belongsTo(models.Countries);
      }
    }
  }
  Employees.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    employee_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female"],
      allowNull: false,
    },
    address_1: {type: DataTypes.STRING(100), allowNull: false},
    address_2: {type: DataTypes.STRING(100), allowNull: false},
    city: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Countries',
        key: 'id',
      }
    }, 
    is_active:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    utc_created_at:{
      type:DataTypes.DATE,
      allowNull:false,
      defaultValue:currentTime
    },
    utc_updated_at:{
      type:DataTypes.DATE,
      allowNull:false,
      defaultValue:currentTime
    }
  },
  {
    sequelize,
    modelName: 'Employees',
    timestamps:true,
    createdAt:'utc_created_at',
    updatedAt:'utc_updated_at'
    }
  );
  return Employees;
};



 