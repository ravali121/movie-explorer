import React, {Component } from "react";
import {getImageFromSource} from "../../utils/getImageFromSource";
import {Link} from "react-router-dom";
import axios from "axios";
import './MovieDetails.css';


class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieDetails:{},
      cast:[],
      crew:[],
    }
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }


 async fetchMovieDetails() {

    const {params} = this.props.match;
    const {id:movieId} = params;

    const {data:movieDetails} = await axios.get(`http://localhost:8080/movies/${movieId}`);
    this.setState({movieDetails});

    const {data} = await axios.get(`http://localhost:8080/movies/${movieId}/credits`);
    this.setState({cast: data.cast, crew: data.crew});
  }


  render() {

    const {movieDetails, cast} = this.state;
    const {
      original_title,
      overview,
      poster_path,
      release_date,
      vote_average
    } = movieDetails;


    return (
      <div className="movie-container">
        {poster_path &&
        <div className="poster">
          <img src={getImageFromSource(poster_path)} alt={original_title} />
        </div>
        }
        <div className="content">
          <h1>{original_title}</h1>
          <p><i>Release Date: {release_date}</i></p>
          <p>{overview}</p>
          <p>Score: {vote_average}/10</p>
          <h3>Cast</h3>
          <ul className="cast">
            {cast.map(member => (
              <li>
                <Link to={location => `/actors/${member.id}`}><b>{member.name}</b></Link> {member.character}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

}

export default MovieDetails;
