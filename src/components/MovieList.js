import React from "react";

import MovieListItem from "./MovieListItem";
import MovieFooter from "./MovieFooter";
import { useSelector } from "react-redux";

const MovieList = (props) => {
  const movies = useSelector((store) => store.movieReducer.movies);

  return (
    <div className="flex-1">
      <div className="overflow-hidden bg-white rounded-md shadow mb-4 ">
        <table className="table-auto border-collapse text-left w-full ">
          <thead >
            <tr className="border-zinc-200 border-b bg-[#759eb8] text-white hover:bg-[#759eb8]">
              <th className="pl-4">İsim</th>
              <th>Yönetmen</th>
              <th>Tür</th>
              <th>Metascore</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="text-sm bg-[#edeef1]">
            {movies.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
          </tbody>
        </table>
      </div>

      <MovieFooter totalMovies={movies.length} />
    </div>
  );
};

export default MovieList;
