const express = require('express');
const router = express.Router();
module.exports = router;

/**
 * Routes definition
 */
const usersRouter = require('./routes/users');

router.use('/users', usersRouter);