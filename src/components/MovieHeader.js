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
    <div className="flex justify-between items-center shadow rounded-md bg-[#cee5f2] p-2 pl-3 my-3">
      <h2 className="text-zinc-600">{appTitle}</h2>
      <div className="flex items-center gap-2">
        {/* <button
          onClick={() => handleClick()}
          className="myButton bg-blue-600 hover:bg-blue-500"
        > */}
          <button className="bg-[#7392b7] hover:bg-[#d8e1e9] text-white hover:text-[#A09ABC] py-2 px-4 rounded-full" onClick={() => dispatch(toggleFavorites())}>Favorileri {displayFavorites ? "gizle" : "göster"}</button>
        {/* </button> */}
        <Link to="/movies" className="bg-[#7392b7] hover:bg-[#d8e1e9] text-white hover:text-[#A09ABC] py-2 px-4 rounded-full">
          Tüm filmler
        </Link>
        <Link
          to="/movies/add"
          className="bg-[#7392b7] hover:bg-[#d8e1e9] text-white hover:text-[#A09ABC] py-2 px-4 rounded-full"
        >
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieHeader;
