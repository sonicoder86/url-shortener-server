import { nanoid } from 'nanoid';
import { config } from '../config.js';
import { UrlModel } from '../models/url.model.js';
import { UrlStatModel } from '../models/url-stat.model.js';

export class UrlService {
  static async create(url) {
    const shortId = nanoid(13);
    const shortUrl = `${config.baseUrl}/redirect/${shortId}`;
    const originalUrl = url;

    await UrlModel.create({ originalUrl, shortId });
    await UrlStatModel.create({ visits: 0, shortId });

    return { originalUrl, shortUrl, shortId };
  }

  static async redirect(shortId) {
    const url = await UrlModel.findOne({ shortId });

    if (!url) {
      throw new Error('Url not found');
    }

    await UrlStatModel.findOneAndUpdate({ shortId }, { $inc: { visits: 1 } });
    return url.originalUrl;
  }

  static async cleanup() {
    await UrlModel.deleteMany({});
    await UrlStatModel.deleteMany({});
  }
}
