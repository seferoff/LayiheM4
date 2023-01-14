const initialState = {
  movies: [],
  favMovies: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return { ...state, movies: action.payload };

    case "ADD_FAV_MOVIE":
      return { ...state, favMovies: [...state.favMovies, action.payload] };

    case "DELETE_FAV_MOVIE":
      return { ...state, favMovies: [...state.favMovies.filter(movie => movie.imdbID !== action.payload)] };

    default:
      return state;
  }
};

export default reducer;
