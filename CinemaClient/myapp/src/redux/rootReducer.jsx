const initialState = {
  movies: [],
  users: [],
  subs:[],
  members:[]
};

const movieReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'LOAD-SUBS':
      return {...state, subs: action.payload}

      
    case 'LOAD-MEMBERS':
      return {...state, members: action.payload}


      
    case 'ADD-MEMBER':
      console.log("added", action.payload)
      return { ...state, members: [...state.members, action.payload] };

      
    case 'UPDATE-MEMBER':{
      const members = [...state.members]
      console.log(members, action.payload._id, "logloglog")

      const index = members.findIndex((member) => member._id === action.payload._id)
      
      if (index !== -1) {
        members[index] = action.payload
      }

      return { ...state, members: members };
}


    case 'LOAD':
      return {...state, movies: action.payload}

    case 'ADD':
      console.log("added", action.payload)
      return { ...state, movies: [...state.movies, action.payload] };

    case 'UPDATE':
      // console.log(action.payload)
      const movies = [...state.movies]
      console.log(movies, action.payload.id, "logloglog")

      const index = movies.findIndex((movie) => movie.id == action.payload.id)
      
      if (index !== -1) {
        movies[index] = action.payload
      }

      return { ...state, movies: movies };

      case 'DELETE-MEMBER':{
        console.log(action.payload)
        const members = state.members.filter(members => members._id !== action.payload)
  
        return { ...state, members: members };}
  

    case 'DELETE':{
      console.log(action.payload)
      const movies = state.movies.filter(movie => movie.id !== action.payload)

      return { ...state, movies: movies };}

      case "LOAD_USERS":
        return {...state, users: action.payload}

    default:
      return state;
  }
};

export default movieReducer;
