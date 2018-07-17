'use strict';
module.exports = (sequelize, DataTypes) => {
  var Developers = sequelize.define('Developers', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Developers.associate = function(models) {
    // associations can be defined here
  };
  return Developers;
};