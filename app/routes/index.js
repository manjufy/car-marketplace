var express = require('express');
var router = express.Router();

/**
 * UI Home Page: http://localhost:3000
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Car Marketplace' });
});

module.exports = router;
