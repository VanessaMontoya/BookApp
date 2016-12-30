const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// create the User model
var User = sequelizeConnection.define('user', {
  username: {
    type: Sequelize.STRING,
    validate: {
    	len: [1,50]
    }
  },
  email: {
  	type: Sequelize.STRING,
  	validate: {
  		len: [1,100]
  	}
  },
  password:  {
  	type: Sequelize.STRING,
  	validate: {
    	len: [1,100]
    }
  }
});

//User.sync(); //used to create the table

module.exports = User;