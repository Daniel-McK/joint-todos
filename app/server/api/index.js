const express = require('express');

const apiRouter = new express.Router();

apiRouter.route('/test')
  .get((req, res) => {
    res.json({example: 'text'});
  });

module.exports = apiRouter;
