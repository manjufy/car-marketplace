const passport = require('passport')
const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');
const availabilityController = require('../controllers/availabilities');
const authorize = passport.authenticate('bearer', { session: false });

router.post('/', authorize, carsController.upsert);
router.get('/', authorize, carsController.list);
router.get('/:id', authorize, carsController.get);

// car availability routes
router.post('/:car_id/availabilities', authorize, availabilityController.upsert);
router.patch('/:car_id/availabilities/:id', authorize, availabilityController.upsert);
router.get('/:car_id/availabilities', authorize, availabilityController.list);
router.get('/:car_id/availabilities/:id', authorize, availabilityController.get);


module.exports = router;
