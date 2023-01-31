import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleFavorites } from "../actions/favoritesActions";

const MovieHeader = (props) => {
  const appTitle = useSelector((store) => store.movieReducer.appTitle);
  const displayFavorites = useSelector(
    (store) => store.favoritesReducer.displayFavorites
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorites());
    console.log(displayFavorites);
  };

  return (
    <div className="flex justify-between items-center shadow rounded-md bg-white p-2 pl-3 my-3">
      <h2 className="text-zinc-600">{appTitle}</h2>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleClick()}
          className="myButton bg-blue-600 hover:bg-blue-500"
        >
          <span>Favorileri {displayFavorites ? "gizle" : "göster"}</span>
        </button>
        <Link to="/movies" className="myButton bg-blue-600 hover:bg-blue-500">
          Tüm filmler
        </Link>
        <Link
          to="/movies/add"
          className="myButton bg-green-700 hover:bg-green-600"
        >
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieHeader;
