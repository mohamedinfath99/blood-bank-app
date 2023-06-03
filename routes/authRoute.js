const express = require('express');
const { createUserController, loginUserController, currentUserController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', createUserController);
router.get('/login', loginUserController);
router.get('/current-user', authMiddleware, currentUserController);

module.exports = router;