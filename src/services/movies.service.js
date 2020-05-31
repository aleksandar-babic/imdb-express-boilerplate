import { Movie } from './../models'

const index = async () => {
  const movies = await Movie.find();

  return movies;
};

const show = async ({id}) => {
  var movie = await Movie.findById(id);

  return movie;
};

const store = async ({title, description, imageUrl}) => {
  if (!title || !description || !imageUrl) {
    return { err: 'Movie data error' };
  }

  var movie = new Movie({title: title, description: description, imageUrl: imageUrl});
  var movie = await movie.save();

  return movie;
};

const update = () => {
  // Todo
};

const destroy = async ({id}) => {
  var movie = await Movie.findByIdAndRemove(id);

  return movie;
};

export {
  index,
  show,
  store,
  update,
  destroy,
};
