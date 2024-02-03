import React from 'react'
import { useNavigate,Link,Outlet } from 'react-router-dom';



const MainPage = () => {
    const navigate = useNavigate()

    const handleMoviesButtonClick = () => {
      navigate('/movie-page'); 
    }
  
    const handleSubscriptionButtonClick = () => {
      navigate('/subscriptions-page'); 
    }
    const handleOutButtonClick = () => {
      navigate('/'); 
    }

 


  return (
    <>
    <hr/>
    <h1>Movies - Subscriptions Web Site</h1>
    <button onClick={() => navigate("/manage")}  >Users Management</button>{' '}

    <button onClick={handleMoviesButtonClick} >Movies</button>{' '}
    <button onClick={handleSubscriptionButtonClick} >Subscription</button>{' '}
    <button onClick={handleOutButtonClick}>Log Out</button>{' '}
    
    </>
  )
}

export default MainPage