import { ADD_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case ADD_FAVORITE:
      let favMovie = action.payload;
      console.log(favMovie);

      return {
        ...state,
        favorites: favMovie,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
