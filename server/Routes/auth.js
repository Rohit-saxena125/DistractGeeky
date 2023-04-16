const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const passport = require("passport");
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email });
        const newUser = await User.register(user, password);
        console.log(newUser);
        // req.flash("success", "You are now registered, please login");
       res.status(200).send(newUser);
    } catch (e) {

        // req.flash("error", e.message);
        res.status(400).send(e);
    }

});
router.post("/login", passport.authenticate("local"), (req, res) => {

    console.log(req.body.username);
    res.status(200).send(req.body.username);

});

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash('success', 'GoodBye, see you again!');
        res.redirect('/login');
    });
});
module.exports = router;

