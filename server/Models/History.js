// I want to use the History model in the server.js file
// in history model how many videos we see  clinetside stored in the database and display in the history page
const mongoose = require('mongoose');
const HistorySchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
});
const History = mongoose.model('History', HistorySchema);
module.exports = History;