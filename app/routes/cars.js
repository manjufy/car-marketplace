const passport = require('passport')
const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');

router.get('/', passport.authenticate('bearer', { session: false }), carsController.list);
router.post('/', passport.authenticate('bearer', { session: false }), carsController.upsert);

module.exports = router;
