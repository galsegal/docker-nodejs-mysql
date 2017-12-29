'use strict';
module.exports = (sequelize, DataTypes) => {
  var cars = sequelize.define('cars', {
    id:{
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    foo:{
      type: Sequelize.STRING(255),
      allowNull: false
    },
    bar:{
      type: Sequelize.STRING(255),
      allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
      } 
  }, {
    tableName: 'cars',
    freezeTableName: true,
    underscored: false,
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cars;
};