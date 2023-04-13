if(process.env.NODE_ENV != "production"){

    require("dotenv").config({ path: "./.env"})
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
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log('ERROR:', err.message);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const user = require("./Models/user");
const auth = require('./Routes/auth');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(methodOverride("_method"));
app.use(auth);
app.get('/', (req, res) => {
    res.send('Hello World!');
});