// const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

const User = require("../models/user");

module.exports = {
	showHome: (req, res) => {
		res.render('login');
	},

	showRegister: (req, res) => {
		res.render('register');
	},

	createUser: (req, res) => {
		var password = req.body.password;
		var confirmationPassword = req.body.confirmPassword;
		if (password !== confirmationPassword) {
			req.flash("error", "The passwords do not match. Please try again.");
			res.redirect('/register');
		}
		var user = {
			username: req.body.username,
			email: req.body.email,
			gender: req.body.gender,
			age: req.body.age,
			weight: req.body.weight,
			height: req.body.height
		}
		User.register(user, req.body.password, (err, user) => {
			if (err) {
				console.log(err);
				req.flash("error", "Username already exists. Please Log In.");
				res.redirect('/register');
			} else {
				passport.authenticate("local")(req, res, function () {
					req.flash("success", "Welcome " + req.body.username)
					res.redirect("/dashboard");
				});
			}
		});
	},

	loginUser: (req, res) => {
		req.flash("success", "Welcome " + user.username);
	},

	logoutUser: (req, res) => {
		req.logout();
		req.flash("success", "Logged Out Successfully.");
		res.redirect('/');
	}

	// googleAuth: passport.authenticate('google', {scope : ['profile']}),
	// googleCallback: passport.authenticate( 'google', { successRedirect: '/secrets', failureRedirect: '/auth/google'} ),

	// githubAuth: passport.authenticate('github', {scope : ['user:email']}),
	// githubCallback: passport.authenticate( 'github', { successRedirect: '/secrets', failureRedirect: '/auth/github'} ),
};