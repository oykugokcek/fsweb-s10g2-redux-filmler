import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = (props) => {
  const { id, title, director, genre, metascore } = props.movie;

  return (
    <tr>
      <td className='pl-4'>{title}</td>
      <td>{director}</td>
      <td>{genre}</td>
      <td className='text-center'>{metascore}</td>
      <td className='p-2'>
        <Link to={`/movies/${id}`} className="myButton">
          Detay
        </Link>
      </td>
    </tr>
  );
}

export default MovieListItem;