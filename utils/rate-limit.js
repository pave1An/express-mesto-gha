const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Слишком много запросов. Попробуйте еще раз через несколько минут',
  statusCode: 429,
});

module.exports = limiter;
