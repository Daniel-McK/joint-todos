const express = require('express');

const checkToken = require('../middleware/checkToken');
const listRouter = require('./lists');

const apiRouter = new express.Router();

// middlewares
apiRouter.use(checkToken);

apiRouter.use('/lists', listRouter);

module.exports = apiRouter;
