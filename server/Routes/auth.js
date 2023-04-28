const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const passport = require("passport");
const auth = require('../Middleware/auth');
const jwt = require('jsonwebtoken');
router.post("/register", async (req, res) => {
    try {
        if (req.body.password.length < 8) {
            res.send('Password must be at least 8 characters long');
        }
        else if (await User.findOne({ email: req.body.email })) {
            res.send('User already exists');
        }
        else if (req.body.password != req.body.confirmpassword) {
            res.send('Passwords do not match');
        }
        else {
            const { username, email, password } = req.body;
            const user = new User({ username, email, password });
            const newUser = await user.save();
            console.log(newUser);
            res.status(201).send(newUser);
        }
    } catch (e) {
        res.status(400).send(e);
    }

});
router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            res.status(400).send('User does not exist');
        }
        else if(password != user.password) {
            res.status(400).send('Invalid Password');
        }
        else {
            const token = jwt.sign({_id: user._id}, process.env.SECRETE);
           res.send({user, token});
        }
 

    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
router.get('/logout', auth, async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).send('Logged out');
        await req.user.save();
    }

    catch (e) {
        res.status(400).send(e.message);
    }
});
router.get('/test', (req, res) => {
    res.send('test');
})

module.exports = router;

