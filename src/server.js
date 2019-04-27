const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = 3000 || process.env.APP_PORT;

app.use(morgan('combined'));

app.get('/', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App started successfully! Try it at http://localhost:${port}`));

module.exports = app;
