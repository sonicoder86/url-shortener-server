import mongoose from 'mongoose';
import { config } from './config.js';

export const connect = () => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(config.mongodb.url);
};

export const disconnect = () => mongoose.disconnect();
