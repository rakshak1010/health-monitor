var express = require('express');
var router = express.Router();

const passport = require('passport');
var authentication = require("../middlewares/authentication.js");
const user = require('../controllers/dashboard');

/* GET users listing. */

router.get('/dashboard', user.showDashboard);

module.exports = router;
