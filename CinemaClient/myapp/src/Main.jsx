// index.js or index.jsx
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import {legacy_createStore as createStore } from 'redux';


// const store = createStore


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );


// index.js or index.jsx


import ReactDOM from 'react-dom';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore } from 'redux'; // Import createStore from redux
import rootReducer from './redux/rootReducer.jsx'; // Import your rootReducer

const store = createStore(rootReducer); // Create the Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
