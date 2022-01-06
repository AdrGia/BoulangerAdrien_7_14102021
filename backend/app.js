
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const fs = require('fs');
const session = require('express-session');
require('dotenv').config();



const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const notifRoutes = require('./routes/notif');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.KEY_CORS);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(session({ secret: process.env.KEY_COOKIES, cookie: {maxAge: 9000 }}))


app.use(bodyParser.json());
app.use(helmet());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/notif', notifRoutes);


module.exports = app;