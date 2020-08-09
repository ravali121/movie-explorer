import router from 'koa-joi-router';
import controllers from 'src/api/controllers';

const { Joi } = router;
const actors = router();
const {actorsController} = controllers;

const routes = [
  {
    method: 'get',
    path: '/actors/:id',
    handler:  actorsController.getActorDetails,
    validate: {
      params:{
        id:Joi.string()
          .description('actor id')
          .required(),
      },
      query: {
        page: Joi.number().allow(null),
      },
    },
  },
];

actors.route(routes);
export default actors;
