const express = require('express');
const router = express.Router();
const User = require('../Models/user');
router.post('/register', async (req, res) => {
    try{
        const {email, username, password ,role} = req.body;
        const user = new User({email, username,role, password});
        const registeredUser = await user.save();
        res.send(registeredUser);
    }catch(e){
        res.send(e.message);
    }
});
router.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        
    }
    catch(e){
        res.send(e.message);
    }
});
module.exports = router;