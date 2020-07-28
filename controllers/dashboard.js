const Health = require("../models/health");

module.exports = {

    showDashboard: (req, res) => {
        Health.find({}).sort([['createdAt', -1]]).exec((err, health) => {
            if (err) {
                console.log(err);
            }
            res.render('dashboard', { health: health });
        });
    }
};