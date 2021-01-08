var express = require('express');
var router = express.Router();
var controllers = require('./../controllers');

var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

/* GET home page. */
router.get('/', csrfProtection, controllers.home);

module.exports = router;
