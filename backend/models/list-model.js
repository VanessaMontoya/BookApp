const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const User = require('./user-model');

//////////
// YOUR CODE HERE:
//////////

var List = sequelizeConnection.define('list', {
  title: {type: Sequelize.STRING,
  validate: {len:[1,100]}
 }
});

//List.sync();

List.belongsTo(User);

module.exports = List;