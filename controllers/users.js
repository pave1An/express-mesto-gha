const User = require('../models/user');

const badRequest = 400;
const notFound = 404;
const internalError = 500;

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => res.status(internalError).send({ message: 'На сервере произошла ошибка' }));
};

const getUserById = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) return res.status(notFound).send({ message: 'Пользователь по указанному Id не найден' });
      return res.send(user);
    })
    .catch(() => res.status(internalError).send({ message: 'На сервере произошла ошибка' }));
};

const postUser = (req, res) => {
  User.create({ ...req.body })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        return res.status(badRequest).send({ message: 'Переданы некорректные данные при создании пользователя' });
      }
      return res.status(internalError).send({ message: 'На сервере произошла ошибка' });
    });
};

const patchUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) return res.status(notFound).send({ message: 'Пользователь по указанному Id не найден' });
      return res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        return res.status(badRequest).send({ message: 'Переданы некорректные данные при обновлении данных пользователя' });
      }
      return res.status(internalError).send({ message: 'На сервере произошла ошибка' });
    });
};

const patchAvatar = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { avatar: req.body.avatar },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) return res.status(notFound).send({ message: 'Пользователь по указанному Id не найден' });
      return res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        return res.status(badRequest).send({ message: 'Переданы некорректные данные при обновлении аватара' });
      }
      return res.status(internalError).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  patchUser,
  patchAvatar,
};
