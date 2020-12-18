const passport = require('passport')
const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');

router.post('/', passport.authenticate('bearer', { session: false }), carsController.upsert);
router.get('/', passport.authenticate('bearer', { session: false }), carsController.list);
router.get('/:id', passport.authenticate('bearer', { session: false }), carsController.get);

module.exports = router;
