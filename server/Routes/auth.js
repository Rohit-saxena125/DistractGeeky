const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const crypto = require('crypto');
const passport = require("passport");
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email ,password});
        const newUser = await user.save();
        console.log(newUser);
        // req.flash("success", "You are now registered, please login");
       res.status(200).send(newUser);
    } catch (e) {

        // req.flash("error", e.message);
        res.status(400).send(e);
    }

});
router.post("/login", async(req, res) => {
    try{
        const {email, password} = req.body;
        console.log(email, password);
        const user = await User.findOne({email});
        if(!user){
            throw new Error("User not found");
        }
        const isMatch = user.password === password;
        if(!isMatch){
            throw new Error("Password is incorrect");
        }
        res.status(200).send(user.username);
    }
    catch(e){
        res.status(400).send(e.message);
    }
});

router.get('/logout', function (req, res, next) {
    console.log(req.session.cookie);
    req.session.destroy(function(err) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send("Logged out");
        }
      });
});
router.get('/test', (req, res) => {
    res.send('test');
})
module.exports = router;

