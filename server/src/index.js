import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import respond from 'koa-respond';
import http from 'http';
import config from './config';
import routes from './api/routes';

const {envs} = config;

const app = new Koa();

//app.use(async ctx => ctx.body="Hello from the other side!!");

app.use(cors());

// Router middleware
Object.values(routes).forEach((route) => {
  // bind the routes to the app here
  app.use(route.middleware());

  // enable HTTP 405 & 501 support on the routes
  app.use(route.router.allowedMethods());
});

app.use(bodyParser({
  jsonLimit: '50mb',
  onerror: (err, ctx) => {
    ctx.throw('body parse error', 422);
  },
}));

//
app.use(respond({}));

const server = http.createServer(app.callback());

// start the server
server.listen(envs.port, envs.host, () => {
  console.log(`Node Server running on ${envs.host}:${envs.port}`);
});
