const express = require('express');

const authRouter = new express.Router();

authRouter.post('/login', (req, res) => {
  console.log(req.body.email + ' is logging in.');
  res.json({
    success: true,
    token: 'token',
    user: {
      firstName: 'Daniel',
      lastName: 'McKittrick',
      isAdmin: true,
      email: 'testemail@gmail.com'
    }
  })
});

module.exports = authRouter;
