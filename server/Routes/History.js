// after login i want to store how many videos we see in the database and display in the history page
// Compare this snippet from server\Routes\History.js:
const express = require('express');
const router = express.Router();
const History = require('../Models/History');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
// @route   GET api/history
// @desc    Get all users history
// @access  Private
router.get('/history', auth, async (req, res) => {
    try {
        const history = await History.find({ user: req.user.id }).sort({
            date: -1,
        });
        res.json(history);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// @route   POST api/history
// @desc    Add new history
// @access  Private
router.post('/history',
    [
        auth,
        [
            check('videoId', 'Video Id is required').not().isEmpty(),
            check('title', 'Title is required').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { videoId, title } = req.body;
        try {
            const newHistory = new History({
                videoId,
                title,
                user: req.user.id,
            });
            const history = await newHistory.save();
            res.json(history);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);
// @route   PUT api/history/:id
// @desc    Update history
// @access  Private
router.put('/history:id', auth, async (req, res) => {
    const { videoId, title } = req.body;
    // Build history object
    const historyFields = {};
    if (videoId) historyFields.videoId = videoId;
    if (title) historyFields.title = title;
    try {
        let history = await History.findById(req.params.id);
        if (!history) return res.status(404).json({ msg: 'History not found' });
        // Make sure user owns history
        if (history.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }
        history = await History.findByIdAndUpdate(
            req.params.id,
            { $set: historyFields },
            { new: true }
        );
        res.json(history);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
module.exports = router;