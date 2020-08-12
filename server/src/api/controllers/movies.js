import axios from 'axios';
import envs from "../../config/environments";

class MoviesController {
  constructor() {
    this.getPopularMovies = this.getPopularMovies.bind(this);
    this.getMovieCredits = this.getMovieCredits.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  async getPopularMovies(ctx) {

    const {query} = ctx;
    const pageNum = Number(query.page);

    try {
      const {data:res} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${envs.moviesApiKey}&language=en-US&page=${pageNum}`);
      ctx.status=200;
      ctx.body=res;
    }catch (e) {
      ctx.throw(e);
    }
  }

  async getMovieDetails(ctx) {
    const {params} = ctx;
    const {id: movieId} = params;
    try {
      const {data:res} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${envs.moviesApiKey}&language=en-US`);
      ctx.status=200;
      ctx.body=res;
    }catch (e) {
      ctx.throw(e);
    }

  }

  async getMovieCredits(ctx) {
    const {params} = ctx;
    const {id: movieId} = params;

    try {
      const {data:res} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${envs.moviesApiKey}&language=en-US`);
      ctx.status=200;
      ctx.body=res;
    }catch (e) {
      ctx.throw(e);
    }
  }
}

export default MoviesController;

