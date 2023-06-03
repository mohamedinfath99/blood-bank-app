const express = require('express');
const { createUserController, loginUserController } = require('../controllers/authController');

const router = express.Router();

router.post('/create', createUserController);
router.get('/login', loginUserController);

module.exports = router;