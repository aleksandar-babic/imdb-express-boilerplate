const mongoose = require('mongoose');

const dbConnectionString = process.env.DB_CONNECTION;

const connect = () => mongoose.connect(dbConnectionString);

module.exports = {
  connect,
};
