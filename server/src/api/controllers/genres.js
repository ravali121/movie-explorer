import axios from 'axios';
import envs from "../../config/environments";

class GenresController {
  constructor() {
    this.getAllGenres = this.getAllGenres.bind(this);
  }

  async getAllGenres(ctx){
    try {
      const {data:res} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${envs.moviesApiKey}&language=en-US`);
      ctx.status=200;
      ctx.body=res;
    }catch (e) {
      ctx.throw(e);
    }
  }

}

export default GenresController;
