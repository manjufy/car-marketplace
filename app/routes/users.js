const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
router.get('/', usersController.list);
router.post('/', usersController.upsert);

module.exports = router;
