const express = require('express');
const router = express.Router();
const User = require('../Models/User');
router.post('/register', async (req, res) => {
    try{
        const {email, username, password ,role} = req.body;
        const user = new User({email, username,role});
        const registeredUser = await User.register(user, password);
        res.send(registeredUser);
    }catch(e){
        res.send(e.message);
    }
});

module.exports = router;