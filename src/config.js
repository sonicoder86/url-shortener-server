export const config = {
  port: parseInt(process.env.PORT, 10) || 8080,
  baseUrl: process.env.BASE_URL || 'http://localhost:8080',
  mongodb: {
    url: process.env.MONGODB_URL || 'mongodb://root:rootpassword@localhost:27017/admin',
  },
};
