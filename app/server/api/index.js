const express = require('express');

const listRouter = require('./lists');

const apiRouter = new express.Router();

apiRouter.use('/lists', listRouter);

module.exports = apiRouter;
