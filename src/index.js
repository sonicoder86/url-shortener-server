import { config } from './config.js';
import { createServer } from './server.js';
import { disconnect } from './db.js';

const server = createServer();

server.listen({ port: config.port }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});

const shutdown = async () => {
  await server.close();
  await disconnect();
};
process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);
