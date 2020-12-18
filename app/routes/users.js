const passport = require('passport')
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/me', passport.authenticate('bearer', { session: false }), usersController.me);

module.exports = router;
