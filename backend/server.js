// //express and express() are part of the server
const express = require('express');
const app = express();

// //module from node for getting the file paths (not necessary)
 const path = require('path');

// //middleware
const bodyParser = require('body-parser');
const session = require('express-session');

// //database
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

// //models
 const User = require('./models/user-model');
 const List = require('./models/list-model')

 // //also middleware
app.use(express.static(path.join(__dirname, '../frontend/assets')));

// //body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use(session({
	secret: "keyboard cat",
	resave: false,
	saveUninitialized: true,
	cookie: {secure:true}
}));


//part of the server
app.listen('9999', () => console.log('Listening on port 9999'));

// //this needs to be the last piece of code, makes part of the server
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});


