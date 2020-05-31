import mongoose from 'mongoose'
import config from '../config'

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

const dbConnectionString = config.dbConnection;
const connect = () => mongoose.connect(dbConnectionString);

export default {
  connect,
};
