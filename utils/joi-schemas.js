const { Joi } = require('celebrate');
const { linkRegExp } = require('./constants');

module.exports = {
  userIdSchema: Joi.object().keys({
    userId: Joi.string().required().alphanum().length(24),
  }),

  userSchema: Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required().min(5),
    password: Joi.string().required().min(3),
    name: Joi.string().optional().min(2).max(30),
    about: Joi.string().optional().min(2).max(30),
    avatar: Joi.string().optional().pattern(new RegExp(linkRegExp)).min(5),
  }),

  userUpdateSchema: Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).optional().min(5),
    password: Joi.string().optional().min(3),
    name: Joi.string().optional().min(2).max(30),
    about: Joi.string().optional().min(2).max(30),
    avatar: Joi.string().optional().pattern(new RegExp(linkRegExp)).min(5),
  }),

  avatarSchema: Joi.object().keys({
    avatar: Joi.string().optional().pattern(new RegExp(linkRegExp)).min(5),
  }),

  loginSchema: Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required().min(5),
    password: Joi.string().required().min(3),
  }),

  cardSchema: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(new RegExp(linkRegExp)),
  }),

  cardIdSchema: Joi.object().keys({
    cardId: Joi.string().required().alphanum().length(24),
  }),
};
