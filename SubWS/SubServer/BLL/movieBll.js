const moviesWS = require("../Dal/MoviesDal");

const getAllmovies = async () => {
  let { data: movies } = await moviesWS.getAllmovies();

  movies = movies.map((movie) => {
    return {
      id: movie.id,
      name: movie.name,
      premiered: movie.premiered,
      genres: movie.genres,
      image: movie.image.medium,
    };
  });

  movies = movies.slice(0, 10);

  console.log(movies);
  return movies;
};

// getAllmovies();

module.exports = { getAllmovies };
