const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getUsers,
  getUserById,
  patchUser,
  patchAvatar,
  getUserInfo,
} = require('../controllers/users');
const { userIdSchema, userSchema, avatarSchema } = require('../utils/joi-schemas');

router.get('/', getUsers);
router.get('/me', getUserInfo);
router.get('/:userId', celebrate({ params: userIdSchema }), getUserById);
router.patch('/me', celebrate({ body: userSchema }), patchUser);
router.patch('/me/avatar', celebrate({ body: avatarSchema }), patchAvatar);

module.exports = router;
