import React from 'react';
import { useHistory } from 'react-router-dom';

import './MovieCard.css';

function MovieCard(props) {
  const history = useHistory();
  const { posterPath, title } = props;

  function navigateToMovie() {
    history.push(`/movies/${props.id}`);
  }

  return (
    <div className='card-container'>
      <img className='card' src={posterPath} alt={title} onClick={navigateToMovie}/>
    </div>
  )
}

export default MovieCard;
