const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const expressJwt = require('express-jwt');

const envPath = path.resolve(process.cwd(), 'src', '.env');
require('dotenv').config({
  path: envPath,
});

const { authRoutes, movieRoutes } = require('./routes');
const db = require('./database');

const app = express();
const port = 3000 || process.env.APP_PORT;

app.use(morgan('combined'));

app.use(bodyParser.json());

const jwtAuth = expressJwt({
  secret: process.env.JWT_SECRET,
}).unless({ path: ['/auth/register', '/auth/login'] });

app.use(jwtAuth);

app.use(authRoutes);
app.use(movieRoutes);

db.connect()
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected to MongoDB!'))
  // eslint-disable-next-line no-console
  .catch(err => console.error('Error while connecting to MongoDB.', err));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App started successfully! Try it at http://localhost:${port}`));
