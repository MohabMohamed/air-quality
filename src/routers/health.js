const express = require('express');
const HealthController = require('./../controllers/health');

const router = new express.Router();

const healthController = new HealthController();

router.get('/', async (req, res) => healthController.getHealth(req, res));

module.exports = router;
