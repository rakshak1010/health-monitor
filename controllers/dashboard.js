const Health = require("../models/health");
const User = require("../models/user");

module.exports = {

    showDashboard: (req, res) => {
        Health.find({}).sort([['createdAt', -1]]).exec((err, health) => {
            if (err) {
                console.log(err);
            }
            res.render('dashboard', { health: health });
        });
    },
    updateField: (req, res) => {
        userId = res.locals.currentuser._id;
        field = req.query["field"];
        var data;
        if (field === "height") {
            data = { "height": req.body.height };
        } else if (field === "weight") {
            data = { "weight": req.body.weight };
        }

        User.findOneAndUpdate({ '_id': userId }, data, (err, obj) => {
            if (err) {
                console.log(err);
                // res.redirect('/dashboard');
            }
            res.redirect('/dashboard');
        })

    }
};