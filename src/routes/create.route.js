import { UrlService } from '../services/url.service.js';

const schema = {
  body: {
    type: 'object',
    required: ['url'],
    properties: {
      url: { type: 'string' },
    },
  },
};

export const createRoute = {
  method: 'POST',
  url: '/create',
  schema,
  handler: async (request, reply) => {
    const { originalUrl, shortUrl, shortId } = await UrlService.create(
      request.body.url,
    );
    request.log.info('url created', { originalUrl, shortId });

    reply.send({ originalUrl, shortUrl });
  },
};
