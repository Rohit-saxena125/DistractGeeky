if (process.env.NODE_ENV != "production") {

    require("dotenv").config({ path: "../.env" })
}
const express = require('express');
const cors = require('cors');
const path = require("path")
const app = express();
const port = process.env.PORT || 5000;
const methodOverride = require("method-override");
const session = require("express-session")
const flash = require("connect-flash");
const mongoose = require('mongoose');
const passport = require("passport");
var LocalStrategy = require('passport-local');
const user = require("./Models/user");
const auth = require('./Routes/auth');
const history = require('./Routes/History');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log('ERROR:', err.message);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const sessionflash = {
    secret: process.env.SECRETE,
    resave: false,
    saveUninitialized:false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000
    }
};
// app.use(passport.initialize());
app.use(session(sessionflash))
app.use(flash());
// app.use(passport.authenticate('session'));
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();

});
app.use(express.static('client/build'));
app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin:['http://localhost:3000','https://dfg-w1pk.onrender.com'],credentials:true}));
app.use(methodOverride("_method"));
app.use('/',auth);
app.use('/',history);

// passport.use(new LocalStrategy(user.authenticate()));
// passport.serializeUser(user.serializeUser());
// passport.deserializeUser(user.deserializeUser());