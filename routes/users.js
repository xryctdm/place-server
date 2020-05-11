const router = require('express').Router();

const {
  getAllUsers, getUserById,
} = require('../controllers/users');

router.get('/users', getAllUsers);
router.get('/users/:userId', getUserById);

module.exports = router;
