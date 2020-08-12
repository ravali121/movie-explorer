import router from 'koa-joi-router';
import controllers from 'src/api/controllers';

const { Joi } = router;
const search = router();
const {searchController} = controllers;


const routes = [

  {
    method: 'get',
    path: '/search/movie',
    handler:  searchController.getSearchedMovies,
    validate: {
      query: {
        searchString: Joi.string().allow(null),
        page: Joi.number().allow(null),
      },
    },
  }

];

search.route(routes);
export default search;




