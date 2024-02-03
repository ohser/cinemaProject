import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './mainpage.css'

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMoviesButtonClick = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/movies/movies");
      const subs = await axios.get("http://localhost:3000/api/subs/subs");
      const members = await axios.get("http://localhost:3000/api/members/members");

      if (response.data.length === 0) {
        console.log("No movies found.");
      } else {
        dispatch({ type: 'LOAD', payload: response.data });
        dispatch({ type: 'LOAD-SUBS', payload: subs.data });
        dispatch({ type: 'LOAD-MEMBERS', payload: members.data });

        navigate('/movie-page');
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("Error fetching movies.");
    }
  };

  const handleSubscriptionButtonClick = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/movies/movies");
      const subs = await axios.get("http://localhost:3000/api/subs/subs");
      const members = await axios.get("http://localhost:3000/api/members/members");

      if (subs.data.length === 0) {
        console.log("No subscriptions found.");
      } else {
        dispatch({ type: 'LOAD', payload: response.data });
        dispatch({ type: 'LOAD-SUBS', payload: subs.data });
        dispatch({ type: 'LOAD-MEMBERS', payload: members.data });

        navigate('/subscriptions-page');
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("Error fetching subscriptions.");
    }
  };

  const handleOutButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="main-page-container">
      <h1>Movies - Subscriptions Web Site</h1>
      <div className="button-container">
        <button onClick={handleMoviesButtonClick}>Movies</button>
        <button onClick={handleSubscriptionButtonClick}>Subscription</button>
        <button onClick={handleOutButtonClick}>Log Out</button>
      </div>
    </div>
  );
};

export default MainPage;
