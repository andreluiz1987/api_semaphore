'use scrict'

const service = require('../services/mcuService');
const express = require('express');
const router = express.Router();

router.post('/actions/success', service.buildSuccess);
router.post('/actions/running', service.buildRunning);
router.post('/actions/failed', service.buildFailed);

module.exports = router;
