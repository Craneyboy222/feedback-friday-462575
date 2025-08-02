import Redis from 'ioredis';

const redisClient = new Redis();

export const cacheMiddleware = (req, res, next) => {
  const { method, url } = req;
  if (method !== 'GET') return next();

  redisClient.get(url, (err, data) => {
    if (err) return next(err);
    if (data) return res.status(200).send(JSON.parse(data));
    next();
  });
};

export const setCache = (key, value, expiration = 3600) => {
  redisClient.setex(key, expiration, JSON.stringify(value));
};

export default redisClient;