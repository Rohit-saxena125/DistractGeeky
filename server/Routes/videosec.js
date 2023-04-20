if (process.env.NODE_ENV != "production") {

    require("dotenv").config({ path: "./.env" })
}
const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const auth = require('./auth');
const { check, validationResult } = require('express-validator');
const History = require('../Models/History');

// Configure the Google API client
const youtube = google.youtube({
    version: 'v3',
    auth: process.env.API_key, // Your YouTube API key here
});

// @desc get video from api and display on frontend

// router.get()

module.exports = router;