const express = require('express');

const authRouter = new express.Router();

authRouter.post('/login', (req, res) => {
  res.json({
    success: true,
    token: 'token',
    user: {
      firstName: 'Daniel',
      lastName: 'McKittrick',
      isAdmin: true,
      email: 'testemail@gmail.com'
    }
  });
});

authRouter.post('/token', (req, res) => {
  res.json({
    success: true,
    token: 'token',
    user: {
      firstName: 'Daniel',
      lastName: 'McKittrick',
      isAdmin: true,
      email: 'testemail@gmail.com'
    }
  });
});

module.exports = authRouter;
