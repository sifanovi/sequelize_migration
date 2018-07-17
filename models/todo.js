'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todolist = sequelize.define('todo_list',{
	
	task:Sequelize.STRING
	status:Sequelize.INTEGER,
		

}, {});
  todo_list.associate = function(models) {
    // associations can be defined here
  };
  return Todolist;
};