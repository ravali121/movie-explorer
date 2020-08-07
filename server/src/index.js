import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import http from 'http';
import config from './config';

const {envs} = config;

const app = new Koa();

app.use(async ctx => ctx.body="Hello from the other side!!");

app.use(cors());

app.use(bodyParser({
  jsonLimit: '50mb',
  onerror: (err, ctx) => {
    ctx.throw('body parse error', 422);
  },
}));

const server = http.createServer(app.callback());

// start the server
server.listen(envs.port, envs.host, () => {
  console.log(`Node Server running on ${envs.host}:${envs.port}`);
});
