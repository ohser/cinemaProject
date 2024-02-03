// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import EditMovies from "./EditMovies";
// import { useNavigate, Link, Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// // import utils from './utilsj'

// const Movie = () => {
//   const dispatch = useDispatch();
//   // const useSelector = useSelector()

//   let movie = useSelector((state) => state.movies);
//   let subs = useSelector((state) => state.subs);
//   let members = useSelector((state) => state.members);

//   console.log(movie, "movies");
//   const [movies1, setMovies] = useState([]);
//   const [movies2, setMovies2] = useState([]);
//   const [addMovie, setaddMovie] = useState(false);
//   const [setEdit, setsetEdit] = useState(false);

//   const [showMovie, setshowMovie] = useState(false);

//   const [newMovie, setnewMovie] = useState({
//     name: "",
//     genres: "",
//     image: "",
//     premiered: "",
//   });

//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const EditMovie = (movie) => {
//     navigate("/edit-movie", { state: { movie } });
//   };

//   const deleteMovie = (movie) => {
//     dispatch({ type: "DELETE", payload: movie.id });
//     navigate("/movie-page");
//   };

//   const showAddmovie = () => {
//     if (addMovie === false) {
//       setaddMovie(!addMovie);
//     } else {
//       setaddMovie(addMovie === false);
//     }
//   };

//   const shoMovie = async () => {
//     if (showMovie === false) {
//       setshowMovie(!showMovie);
//     } else {
//       setshowMovie(showMovie === false);
//     }
//   };

//   useEffect(() => {
//     const arr = () => {
//       setMovies(movie);
//       setMovies2(movie);
//       console.log(movie);
//     };
//     arr();
//   }, []);

//   const addMovies = () => {
//     // const updatedMovie = [...movies1, newMovie];
//     const finalMovie = { ...newMovie, id: 133 };
//     dispatch({ type: "ADD", payload: newMovie });
//     setMovies([...movies, finalMovie]);
//     setaddMovie(true);
//   };

//   const getMovie = (e) => {
//     setMovies(movie[0]);
//     setMovies2(movie[0]);
//     const arr = movies2.filter((x) => x.name.includes(e.target.value));
//     console.log(arr);
//     setMovies(arr);
//   };

//   return (
//     <>
//       <h1>Movies</h1>
//       <button onClick={shoMovie}>Get All Movies</button>{" "}
//       <button onClick={showAddmovie}>Add Movie</button>
//       <br></br>
//       <br />
//       Find Movie : <input type="text" onChange={getMovie}></input> <br />
//       <br />
//       {addMovie && (
//         <div>
//           Name :{" "}
//           <input
//             type="text"
//             value={newMovie.name}
//             onChange={(e) => setnewMovie({ ...newMovie, name: e.target.value })}
//           ></input>
//           <br />
//           Ganer :{" "}
//           <input
//             type="text"
//             value={newMovie.genres}
//             onChange={(e) =>
//               setnewMovie({ ...newMovie, genres: e.target.value })
//             }
//           ></input>
//           <br />
//           Image url :{" "}
//           <input
//             type="text"
//             value={newMovie.image}
//             onChange={(e) =>
//               setnewMovie({ ...newMovie, image: e.target.value })
//             }
//           ></input>
//           <br />
//           Premired :{" "}
//           <input
//             type="date"
//             value={newMovie.premiered}
//             onChange={(e) =>
//               setnewMovie({ ...newMovie, premiered: e.target.value })
//             }
//           ></input>
//           <br />
//           <br />
//           <button onClick={addMovies}>save</button>
//           <button onClick={showAddmovie}>cancel</button>
//         </div>
//       )}
//       <br />
//       <br />
//       <div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {showMovie && (
//           <div>
//             {movies1?.map((movie) => (
//               <div
//                 key={movie.id}
//                 style={{
//                   border: "3px solid black",
//                   display: "flex",
//                   marginBottom: "20px",
//                   width: "400px",
//                   height: "300px",
//                   margin: "20px",
//                 }}
//               >
//                 <div style={{ marginRight: "10px" }}>
//                   <strong>
//                     <p>
//                       {movie.name}
//                       <br />
//                       {movie.premiered}
//                     </p>
//                   </strong>
//                   <p>Genres: {movie.genres}</p>
//                   <img
//                     style={{
//                       marginLeft: "10px",
//                       width: "100px",
//                       height: "150px",
//                     }}
//                     src={movie.image}
//                     alt={movie.name}
//                   />
//                   <br /> <button onClick={() => EditMovie(movie)}>Edit</button>
//                   <button onClick={() => deleteMovie(movie)}>Delete</button>
//                 </div>
//                 <div
//                   key={`subscription-${movie.id}-unique`}
//                   style={{
//                     border: "3px solid black",
//                     marginRight: "20px",
//                     marginTop: "100px",
//                     minWidth: "100px",
//                     width: "200px",
//                     height: "150px",
//                   }}
//                 >
//                   <strong>
//                     <p>Subscription Watched</p>
//                   </strong>
//                 <ul>
//   {subs &&
//     subs
//       .filter(
//         (sub) =>
//           sub.Movies &&
//           sub.Movies.some((x) => x.movieId === movie.id)
//       )
//       .map((subs) => (
//         <li key={subs.MemberId}>
//           {subs.Movies
//             .filter((movieData) => movieData.movieId === movie.id)
//             .map((movieData) => (
//               <span key={movieData._id}>
//                 {members
//                   .filter((member) => member._id === subs.MemberId)
//                   .map((member) => (
//                     <>
//                       {member.name}: {movieData.date}
//                     </>
//                   ))}
//               </span>
//             ))}
//         </li>
//       ))}
// </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <br />
//     </>
//   );
// };

// export default Movie;

import React, { useState, useEffect } from "react";
import axios from "axios";
import EditMovies from "./EditMovies";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Movie = () => {
  const dispatch = useDispatch();
  let movies = useSelector((state) => state.movies);
  let subs = useSelector((state) => state.subs);
  let members = useSelector((state) => state.members);

  const [addMovie, setAddMovie] = useState(false);
  const [showMovie, setShowMovie] = useState(false);
  const [newMovie, setNewMovie] = useState({
    name: "",
    genres: "",
    image: "",
    premiered: "",
  });

  const navigate = useNavigate();

  const editMovie = (movie) => {
    navigate("/edit-movie", { state: { movie } });
  };

  const deleteMovie = (movie) => {
    dispatch({ type: "DELETE", payload: movie.id });
    navigate("/movie-page");
  };

  const showAddMovie = () => {
    setAddMovie(!addMovie);
  };

  const showMovies = async () => {
    setShowMovie(!showMovie);
  };

  const addMovies = () => {
    const finalMovie = { ...newMovie, id: 133 };
    dispatch({ type: "ADD", payload: finalMovie });
    setAddMovie(false);
  };

  const getMovie = (e) => {
    const filteredMovies = movies.filter((x) => x.name.includes(e.target.value));
    setMovies(filteredMovies);
  };

  return (
    <>
      <h1>Movies</h1>
      <button onClick={showMovies}>Get All Movies</button>{" "}
      <button onClick={showAddMovie}>Add Movie</button>
      <br></br>
      <br />
      Find Movie : <input type="text" onChange={getMovie}></input> <br />
      <br />
      {addMovie && (
        <div>
          Name :{" "}
          <input
            type="text"
            value={newMovie.name}
            onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
          ></input>
          <br />
          Ganer :{" "}
          <input
            type="text"
            value={newMovie.genres}
            onChange={(e) => setNewMovie({ ...newMovie, genres: e.target.value })}
          ></input>
          <br />
          Image url :{" "}
          <input
            type="text"
            value={newMovie.image}
            onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })}
          ></input>
          <br />
          Premired :{" "}
          <input
            type="date"
            value={newMovie.premiered}
            onChange={(e) => setNewMovie({ ...newMovie, premiered: e.target.value })}
          ></input>
          <br />
          <br />
          <button onClick={addMovies}>save</button>
          <button onClick={showAddMovie}>cancel</button>
        </div>
      )}
      <br />
      <br />
      <div>
        {showMovie && (
          <div>
            {movies?.map((movie) => (
              <div
                key={movie.id}
                style={{
                  border: "3px solid black",
                  display: "flex",
                  marginBottom: "20px",
                  width: "400px",
                  // height: "300px",
                  margin: "20px",
                }}
              >
                <div style={{ marginRight: "10px" }}>
                  <strong>
                    <p>
                      {movie.name}
                      <br />
                      {movie.premiered}
                    </p>
                  </strong>
                  <p>Genres: {movie.genres}</p>
                  <img
                    style={{
                      marginLeft: "10px",
                      width: "100px",
                      height: "150px",
                    }}
                    src={movie.image}
                    alt={movie.name}
                  />
                  <br /> <button onClick={() => editMovie(movie)}>Edit</button>
                  <button onClick={() => deleteMovie(movie)}>Delete</button>
                </div>
                <div
                  key={`subscription-${movie.id}-unique`}
                  style={{
                    border: "3px solid black",
                    marginRight: "20px",
                    marginTop: "100px",
                    minWidth: "100px",
                    width: "200px",
                    height: "150px",
                  }}
                >
                  <strong>
                    <p>Subscription Watched</p>
                  </strong>
                  <ul>
                  {subs &&
  subs
    .filter(
      (sub) =>
        sub.Movies &&
        sub.Movies.some((x) => x.movieId === movie.id)
    )
    .map((subs) => (
      <li key={subs.MemberId}>
        {subs.Movies
          .filter((movieData) => movieData.movieId === movie.id)
          .map((movieData) => {
            const member = members.find(
              (member) => member._id === subs.MemberId
            );

            console.log("subs:", subs);
            console.log("members:", members);
            console.log("movieData:", movieData);
            console.log("member:", member);

            return (
              <span key={movieData._id}>
                {member && (
                  <>
                    {member.name}: {movieData.date}
                  </>
                )}
              </span>
            );
          })}
      </li>
                        ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <br />
    </>
  );
};

export default Movie;
