import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from "../actions/favoritesActions";

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
      if(!state.favorites.includes(favMovie))
      {
        state.favorites= [...state.favorites, favMovie]
      }
      return {
        ...state,
        favorites: [...state.favorites]
      };
      case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter((item) => action.payload !== item.id),
        };
    default:
      return state;
  }
};

export default favoritesReducer;
