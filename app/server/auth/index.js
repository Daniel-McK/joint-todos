const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const db = require('../../../config/db');

const authRouter = new express.Router();

authRouter.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed.' });
      return;
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      res.json({ success: false, message: "Authentication failed." });
      return;
    }

    var loginResponse = buildLoginResponse(user, "Login was successful.");
    res.json(loginResponse);
  });
});

authRouter.post('/token', (req, res) => {

  var token = req.body.token;

  if (!token) {
    return res.send({
      success: false,
      message: 'No token provided'
    });
  }

  jwt.verify(token, db.secret, function (err, decoded) {
    if (err) {
      res.json({ success: false, message: "Failed to authenticate token" });
      return;
    }

    res.json({ success: true, user: decoded });
  });
});

// helpers

function buildLoginResponse(user, message) {
  var cleanUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    _id: user._id,
    admin: user.admin
  };

  var maxAgeInSeconds = 24 * 60 * 60 * 7;

  var token = jwt.sign(cleanUser, db.secret, {
    expiresIn: maxAgeInSeconds
  });

  return {
    success: true,
    message: message,
    token: token,
    user: cleanUser
  };
}


module.exports = authRouter;
