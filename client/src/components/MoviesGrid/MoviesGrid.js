import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { getImageFromSource } from '../../utils/getImageFromSource';

import './MoviesGrid.css';

function MoviesGrid({movies}) {
  return (
    <div className='movie-grid'>
      {movies.map(movie => {
        const posterPath = getImageFromSource(movie.poster_path);
        return (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.original_title}
            posterPath={posterPath}
          />
        );
      })}
    </div>
  );
}

export default MoviesGrid;
