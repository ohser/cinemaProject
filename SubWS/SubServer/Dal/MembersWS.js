const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

const getAllmembers = () => {
  return axios.get(url);
};

module.exports = { getAllmembers };