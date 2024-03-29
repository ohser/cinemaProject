const express = require('express');
const router = express.Router();
const movieBll = require('../BLL/movieBll')

const  movieModel = require('../model/MoviesModel')


router.get('/', async (req, res) => {
    try {
      const moviesData = await movieBll.getAllmovies();
  console.log(moviesData)

    //   // Store data in MongoDB
      await movieModel.insertMany(moviesData);
  
      res.json({ message: 'Movies data fetched and stored successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  module.exports = router;