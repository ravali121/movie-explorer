import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { getImageFromSource } from '../../utils/getImageFromSource';

import './MoviesGrid.css';

function MoviesGrid({movies}) {
  return (
    <div className='movie-grid'>
      {movies.map(movie => {
        return (
          <MovieCard
            id={movie.id}
            key={movie.id}
            movie={movie}
          />
        );
      })}
    </div>
  );
}

export default MoviesGrid;
