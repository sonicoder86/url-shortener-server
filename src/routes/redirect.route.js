import { UrlService } from '../services/url.service.js';

export const redirectRoute = {
  method: 'GET',
  url: '/redirect/:shortId',
  handler: async (request, reply) => {
    const shortId = request.params.shortId;

    try {
      const originalUrl = await UrlService.redirect(shortId);
      request.log.info({ msg: 'url redirected', shortId });

      reply.redirect(originalUrl);
    } catch (e) {
      reply.code(404).send();
      request.log.warn({ msg: 'url not found', shortId });
    }
  },
};
