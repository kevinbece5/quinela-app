const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
mongoose.connect('mongodb://localhost:27017/quinela');

const db = mongoose.connection;

//Checks for any errors in the database
db.on('error', console.error.bind(console, 'connection error'));

//Use the Express-session middleware that was required above
app.use(session({
    secret: "Kevin's here",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router)

app.use('/', express.static(path.resolve(__dirname, '../dist/')));
app.use('/login', express.static(path.resolve(__dirname, '../dist/')));
app.use('/signUp', express.static(path.resolve(__dirname, '../dist/')));
app.use('/standings', express.static(path.resolve(__dirname, '../dist/')));
app.use('/fixtures', express.static(path.resolve(__dirname, '../dist/')));
app.use('/fixture', express.static(path.resolve(__dirname, '../dist/')));


// listen on port 3000
app.listen(3000, function () {
    console.log('listening on port 3000');
});
