const axios = require('axios');

const url = 'https://api.tvmaze.com/shows';

const getAllmovies = () => {
  return axios.get(url);
};

module.exports = { getAllmovies };