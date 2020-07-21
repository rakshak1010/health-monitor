module.exports = {
    checkLoginWithError: (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            req.flash("error", "Log in first!")
            res.redirect("/");
        }
    },
    checkLoginNoError: (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect("/graph");
        } else {
            next();
        }
    }
};