const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getUsers,
  getUserById,
  patchUser,
  patchAvatar,
  getUserInfo,
} = require('../controllers/users');
const { userIdSchema, avatarSchema, userUpdateSchema } = require('../utils/joi-schemas');

router.get('/', getUsers);
router.get('/me', getUserInfo);
router.get('/:userId', celebrate({ params: userIdSchema }), getUserById);
router.patch('/me', celebrate({ body: userUpdateSchema }), patchUser);
router.patch('/me/avatar', celebrate({ body: avatarSchema }), patchAvatar);

module.exports = router;
