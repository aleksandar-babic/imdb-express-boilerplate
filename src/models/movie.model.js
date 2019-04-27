const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
// Todo
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
