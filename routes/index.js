const router = require('express').Router();
const { celebrate } = require('celebrate');
const userRoutes = require('./users');
const cardRoutes = require('./cards');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const { userSchema, loginSchema } = require('../utils/joi-schemas');
const NotFoundError = require('../utils/errors/not-found-error');

router.post('/signup', celebrate({ body: userSchema }), createUser);
router.post('/login', celebrate({ body: loginSchema }), login);
router.use(auth);
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('*', (req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
