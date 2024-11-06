// setup and requires
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3030;
const mongoose = require('mongoose');

// body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database connection
mongoose.connect('mongodb://localhost:27017/fullstackblog_db');

// routers
const peopleRouter = require('./routers/peopleRouter');
app.use('/people', peopleRouter);

// catch all error handler


// app listener
app.listen(port, listener);
function listener() {
    console.log(`listening on port ${port}`);
};