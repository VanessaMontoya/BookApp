const router = require('express').Router();
const User = require('../models/user-model');

//login route:
//will receive user name and password through a post request 
//check if user exists
// if true check the password is correct
//if not true create a new user
//if correct password o new user attach login cookie/session info to req/res and send
//else tell them incorrect password 

app.post('/login', (req, res) => {
  console.log('Session:', req.session);
  let userInfo = req.body;
  User.sync()
  //check if user exists
  .then(() => {
    return User.findOne({
      where: {
        username: userInfo.username
      }
    })
  })
  .then((user) => {
    //IF user exists, check if password is correct
    if(user && user.password === userInfo.password) {
      console.log('Password is correct!')
      return user;
    //ELSE IF user does not exist, create new user
    } else if(!user) {
      console.log('Creating new user!');
      return User.create(userInfo);
    } else {
      return null;
    }
  })
  .then((user) => {
    if(user) {
      req.session.username = user.dataValues.username;
      req.session.save();
      console.log('Updated session?', req.session);
      res.send(user);
    } else {
      res.send('Incorrect password!');
    }
  })
});

//authentication learning cookies and auth
app.get('auth', (req,res) => {
	console.log('req.session',req.session);
	if(req.session.username){
		res.send(req.session.username)
	}
	else {
		res.send('no one loggedin')
	}
})

module.exports = router;
