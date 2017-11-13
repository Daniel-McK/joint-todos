const express = require('express');

const api = require('./api');
const auth = require('./auth');

const router = new express.Router();

router.use('/auth', auth);
router.use('/api', api);

module.exports = router;
