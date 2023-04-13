const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const user = require('../server/Models/user');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to database');
}
).catch(() => {
    console.log('Connection failed');
}
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const auth = require('./routes/auth');
app.use('/auth', auth);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


