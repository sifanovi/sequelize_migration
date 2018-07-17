'use strict';
module.exports = (sequelize, DataTypes) => {
  var TodoList = sequelize.define('TodoList', {
    task: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  TodoList.associate = function(models) {
    // associations can be defined here
  };
  return TodoList;
};