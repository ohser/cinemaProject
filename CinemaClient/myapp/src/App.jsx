// import React from "react";
// import Login1 from "./Login.jsx";
// import { Routes, Route } from "react-router-dom";
// import CreateAccount from "./CreateAccount";
// import CreateUsers from "./CreateUsers";
// import MainPage from "./MainPage.jsx";
// import Movie from "./Movie.jsx";
// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Login1 />} />
//         <Route path="/create-account" element={<CreateAccount />} />
//         <Route path="/create-users" element={<CreateUsers />} />

//         <Route path="/main-page" element={<MainPage />} />
//         <Route path="/main-page/movie-page" element={<Movie />} />
//       </Routes>

//       {/* <Route path="/movie-page" element={<Movie />} /> */}
//     </>
//   );
// };

// export default App;

import React from "react";
import Login1 from "./Login.jsx";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import CreateUsers from "./CreateUsers";
import MainPage from "./MainPage.jsx";
import Movie from "./Movie.jsx";
import Subscriptions from './Subscriptions.jsx'
import MainPageAdmin from './MainPageAdmin.jsx'
import EditMovies from './EditMovies.jsx'
import UserManagement from "./UserManagment.jsx";
import MemerEdit from './MemerEdit.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/create-users" element={<CreateUsers />} />
      <Route path="/main-page-admin" element={<MainPageAdmin />} />
      <Route path="/manage" element={<UserManagement />} />


      <Route path="/main-page" element={<MainPage />} />
      <Route path="/movie-page" element={<Movie />} />
      <Route path="/edit-movie" element={<EditMovies />} />
      <Route path="/subscriptions-page" element={<Subscriptions />} />
      <Route path="/edit-member" element={<MemerEdit />} />

    </Routes>
  );
};

export default App;
