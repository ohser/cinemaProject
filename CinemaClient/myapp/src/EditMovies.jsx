
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const EditMovies = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { state: { movie } } = location;

  const MoviePage = () => {
    navigate("/movie-page");
  };

  const [editedMovie, setEditedMovie] = useState({
    id: movie?.id || '',
    name: movie?.name || '',
    genres: movie?.genres || '',
    image: movie?.image || '',
    premiered: movie?.premiered || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setEditedMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };


  const handleUpdate = async () => {
    try {
      console.log('Before Dispatch:', movies);
      if (editedMovie) {
        console.log('Dispatching Update:', editedMovie);
        dispatch({ type: 'UPDATE', payload: editedMovie }) 
          console.log('After Dispatch:', movies)  ;
          navigate("/movie-page");
       
       
      } else {
        console.error('Movie update failed.');
      }
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <div>
      <h1>Edit Movie :  {movie?.name} </h1>
      <br />
      Name : <input name="name" value={editedMovie.name} onChange={handleInputChange} />
      <br />
      <br />
      Genres : <input name="genres" value={editedMovie.genres} onChange={handleInputChange} />
      <br />
      <br />
      Image url : <input name="image" value={editedMovie.image} onChange={handleInputChange} />
      <br />
      <br />
      Premiered : <input type='date' name="premiered" value={editedMovie.premiered} onChange={handleInputChange} />
      <br />
      <br />
      <button onClick={handleUpdate}>Update</button>{" "}
      <button onClick={MoviePage}>Cancel</button>
    </div>
  );
};

export default EditMovies;
