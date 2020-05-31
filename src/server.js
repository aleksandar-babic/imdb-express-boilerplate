import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import expressJwt from 'express-jwt'

import config from './config'
import { authRoutes, movieRoutes } from './routes'
import db from './database'

const app = express();
const port = config.appPort;

app.use(morgan('combined'));

app.use(bodyParser.json());

const jwtAuth = expressJwt({
  secret: config.jwtSecret,
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
