const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const userRoutes = require('./users');
const cardRoutes = require('./cards');
const NotFoundError = require('../utils/errors/not-found-error');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().min(5),
      password: Joi.string().required().min(3),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().min(5),
    }),
  }),
  createUser,
);
router.post(
  '/login',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().min(5),
      password: Joi.string().required().min(3),
    }),
  }),
  login,
);
router.use(auth);
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('*', (req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
