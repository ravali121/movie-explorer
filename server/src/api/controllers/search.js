import axios from 'axios';
import envs from "../../config/environments";

class SearchController {
  constructor() {
    this.getSearchedMovies = this.getSearchedMovies.bind(this);
  }

  async getSearchedMovies(ctx) {

    const {query} = ctx;
    const pageNum = Number(query.page);
    const searchString = query.searchString;

    try {
      const {data:res} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${envs.moviesApiKey}&language=en-US&query=${searchString}&page=${pageNum}&include_adult=false`);
      ctx.status=200;
      ctx.body=res;
    }catch (e) {
      ctx.throw(e);
    }
  }


}

export default SearchController;

