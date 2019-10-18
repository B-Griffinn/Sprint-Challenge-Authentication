// Imports needed - bcrypt and jsonwebtoken
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Required - usersModel + secrets config
const Users = require('../users/users.model.js');
// const secrets = require('../config/');


router.post('/register', (req, res) => {
  // implement registration
  let user = req.body; // << bring in the entire body from the req

  const hash = bcrypt.hashSync(user.password, 8); // << create a constant that will hash our password from the user

  user.password = hash; // << set the password to the hash so the DB never sees the real password

  // Add user using our add method
  Users.add(user)
    .then(saved => {
      res.status(200).json(saved)
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error logging in." })
    })
});










router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
