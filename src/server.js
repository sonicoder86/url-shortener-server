import fastify from 'fastify';
import { indexRoute } from './routes/index.route.js';
import { createRoute } from './routes/create.route.js';
import { redirectRoute } from './routes/redirect.route.js';

export const createServer = (opts) => {
  const server = fastify({
    logger: {
      level: 'info',
    },
    ...opts,
  });

  server.route(indexRoute);
  server.route(createRoute);
  server.route(redirectRoute);

  return server;
};
