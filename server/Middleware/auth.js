const jwt = require('jsonwebtoken');
const User = require('../Models/user');
const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log(token);
    const verifyUser = jwt.verify(token, process.env.SECRETE);
    console.log(verifyUser);
    const user = await User.findOne({
      _id: verifyUser._id,
    });
    console.log(user.email);
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send(e.message);
  }
};
module.exports = auth;