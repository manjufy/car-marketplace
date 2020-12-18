const passport = require('passport')
const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');
const availabilityController = require('../controllers/availabilities');

router.post('/', passport.authenticate('bearer', { session: false }), carsController.upsert);
router.get('/', passport.authenticate('bearer', { session: false }), carsController.list);
router.get('/:id', passport.authenticate('bearer', { session: false }), carsController.get);

// car availability routes
router.post('/:car_id/availabilities', passport.authenticate('bearer', { session: false }), availabilityController.upsert);
router.get('/:car_id/availabilities', passport.authenticate('bearer', { session: false }), availabilityController.list);
router.get('/:car_id/availabilities/:id', passport.authenticate('bearer', { session: false }), availabilityController.get);


module.exports = router;
