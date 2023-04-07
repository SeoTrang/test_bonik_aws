const express = require('express');
const router = express.Router();

// import clientController from '../controller/client.controller';
const clientController = require('../controller/client.controller')

router.get('/', clientController.home);

module.exports = router;