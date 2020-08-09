import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './ActorDetails.css';
import {getImageFromSource} from "../../utils/getImageFromSource";

class ActorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { bio: {}, images: [], movie_credits: [] }
  }


  componentDidMount() {
     this.getActorDetails();
  }

  async getActorDetails() {
    const {params} = this.props.match;
    const {id: actorId} = params;

    const {data} = await axios.get(`http://localhost:8080/actors/${actorId}`);

    const {bio, images, movie_credits} = data;
    this.setState({bio, images: images.profiles, movie_credits: movie_credits.cast});
  }

  render() {
    const { images, movie_credits } = this.state;
    const {
      name,
      biography,
    } = this.state.bio;

    return (
      <div className="person-container">
        {images.length > 0 &&
        <div className="headshot">
          <img src={getImageFromSource(images[0].file_path)} alt={name} />
        </div>
        }
        <div className="details">
          <h1>{name}</h1>
          <p>{biography}</p>
          <h3>Movies</h3>
          <ul className="movies">
            {movie_credits.map(movie => (
              <li>
                <Link to={location => `/movies/${movie.id}`}><b>{movie.original_title}</b></Link> {movie.character}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ActorDetails;
