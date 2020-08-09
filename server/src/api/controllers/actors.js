import axios from 'axios';
import envs from "../../config/environments";


class ActorsController {

  constructor() {
    this.getActorDetails = this.getActorDetails.bind(this);
  }


  async getActorDetails(ctx){
    const {params} = ctx;
    const {id: actorId} = params;

    try {
      const {data:res} = await axios.get(`https://api.themoviedb.org/3/person/${actorId}?api_key=${envs.moviesApiKey}&language=en-US`);
      const {data: images} = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/images?api_key=${envs.moviesApiKey}&language=en-US`);
      const {data: movieCredits} = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${envs.moviesApiKey}&language=en-US`);

      ctx.status=200;
      ctx.body={bio: res, images, movie_credits: movieCredits};
    }catch (e) {
      ctx.throw(e);
    }
  }


}

export default ActorsController;
