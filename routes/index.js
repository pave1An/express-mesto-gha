const router = require('express').Router();
const userRoutes = require('./users');
const cardRoutes = require('./cards');

const notFound = 404;

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('*', (req, res) => res.status(notFound).send({ message: 'Страница не найдена' }));

module.exports = router;
