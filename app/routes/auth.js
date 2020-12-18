const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
console.log('auth controller', authController);
router.post('/login', authController.list);
router.post('/register', authController.register);

module.exports = router;
