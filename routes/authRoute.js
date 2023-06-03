const express = require('express');
const { createUserController } = require('../controllers/authController');

const router = express.Router();

router.post('/create', createUserController);

module.exports = router;