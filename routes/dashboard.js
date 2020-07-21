var express = require('express');
var router = express.Router();

const passport = require('passport');
var authentication = require("../middlewares/authentication.js");
const user = require('../controllers/dashboard');

/* GET users listing. */

router.get('/dashboard', authentication.checkLoginWithError, user.showDashboard);

module.exports = router;
