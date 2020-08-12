import MoviesController from "./movies";
import ActorsController from "./actors";
import SearchController from "./search";
import GenresController from "./genres";


export default {
  moviesController: new MoviesController(),
  actorsController: new ActorsController(),
  searchController: new SearchController(),
  genresController: new GenresController(),
}
