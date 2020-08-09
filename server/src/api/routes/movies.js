import router from 'koa-joi-router';
import controllers from 'src/api/controllers';

const { Joi } = router;
const movies = router();
const {moviesController} = controllers;
//movies.prefix('');

const routes = [
  {
    method: 'get',
    path: '/movies/popular',
    handler:  moviesController.getPopularMovies,
    validate: {
      query: {
        page: Joi.number().allow(null),
      },
    },
  },

  {
    method: 'get',
    path: '/movies/:id',
    handler:  moviesController.getMovieDetails,
    validate: {
      params:{
        id:Joi.string()
          .description('movie id')
          .required(),
      },
      query: {
        page: Joi.number().allow(null),
      },
    },
  },

  {
    method: 'get',
    path: '/movies/:id/credits',
    handler:  moviesController.getMovieCredits,
    validate: {
      params:{
        id:Joi.string()
          .description('movie id')
          .required(),
      },
      query: {
        page: Joi.number().allow(null),
      },
    },
  }

];

movies.route(routes);
export default movies;




