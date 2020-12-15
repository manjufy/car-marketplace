const express = require('express');
const router = express.Router();
module.exports = router;

/**
 * Routes definition
 */
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');

router.use('/', homeRouter);
router.use('/users', usersRouter);