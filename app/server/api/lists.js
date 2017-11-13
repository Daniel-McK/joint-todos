const express = require('express');

const lists = require('../mock/lists');

const listRouter = new express.Router();

listRouter.get('', (req, res) => {
  res.json(lists);
})

module.exports = listRouter;