const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

/**
 * API Home: UI Home Page: http://localhost:3000/api/
 */
router.get('/', homeController.get);

module.exports = router;
