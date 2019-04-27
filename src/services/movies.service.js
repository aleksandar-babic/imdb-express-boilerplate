const { Movie } = require('./../models');

const index = async () => {
  const movies = await Movie.find().exec();

  return movies;
};

const show = () => {
  // Todo
};

const store = () => {
  // Todo
};

const update = () => {
  // Todo
};

const destroy = () => {
  // Todo
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
