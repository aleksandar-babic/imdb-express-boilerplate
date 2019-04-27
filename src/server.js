const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const { authRoutes, movieRoutes } = require('./routes');

const app = express();
const port = 3000 || process.env.APP_PORT;

app.use(morgan('combined'));

app.use(authRoutes);
app.use(movieRoutes);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App started successfully! Try it at http://localhost:${port}`));
