const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log('ERROR:', err.message);
});