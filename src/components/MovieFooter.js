import React from 'react';

const MovieFooter = (props) => {
  const { totalMovies } = props;

  return (
    <div className="bg-[#759eb8] text-white text-center p-4 shadow rounded-md">
      <b>{totalMovies}</b> film gösteriliyor
    </div>
  );
}

export default MovieFooter;