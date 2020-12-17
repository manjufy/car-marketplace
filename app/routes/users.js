const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
console.log('are we here....')
router.get('/', usersController.list);
router.post('/', usersController.upsert);

module.exports = router;
