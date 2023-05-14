import { describe, it } from 'node:test';
import assert from 'node:assert';
import supertest from 'supertest';
import { createServer } from '../server.js';

describe('Index Route', () => {
  it('should print welcome message', async () => {
    const server = createServer({ logger: false });
    await server.ready();

    const response = await supertest(server.server)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/plain; charset=utf-8');

    assert.equal(response.text, 'Hello World');
  });
});
