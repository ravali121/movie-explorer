import router from 'koa-joi-router';
import controllers from 'src/api/controllers';

const genres = router();
const {genresController} = controllers;

const routes = [
  {
    method: 'get',
    path: '/genres',
    handler:  genresController.getAllGenres
  },
];

genres.route(routes);
export default genres;
