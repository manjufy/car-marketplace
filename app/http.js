const express = require('express');
const router = express.Router();
module.exports = router;

/**
 * Routes definition
 */
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars');

router.use('/', homeRouter);
router.use('/users', usersRouter);
router.use('/cars', carsRouter);

module.exports = router;