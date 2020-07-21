var express = require('express');
var router = express.Router();

const passport = require('passport');
var authentication = require("../middlewares/authentication.js");
const auth = require('../controllers/auth');

/* GET home page. */
router.get('/', authentication.checkLoginNoError, auth.showHome);
router.post('/', passport.authenticate("local", {
    successRedirect: "/graph",
    failureRedirect: "/",
    failureFlash: true
}), auth.loginUser);

router.get('/login', authentication.checkLoginNoError, auth.showHome);
router.post('/login', passport.authenticate("local", {
    successRedirect: "/graph",
    failureRedirect: "/",
    failureFlash: true
}), auth.loginUser);

router.get('/logout', authentication.checkLoginWithError, auth.logoutUser);

router.get('/register', authentication.checkLoginNoError, auth.showRegister);
router.post('/register', auth.createUser);

// router.get('/auth/google', auth.googleAuth);
// router.get('/auth/google/secrets', auth.googleCallback);

// router.get('/auth/github', auth.githubAuth);
// router.get('/auth/github/secrets', auth.githubCallback);

module.exports = router;
