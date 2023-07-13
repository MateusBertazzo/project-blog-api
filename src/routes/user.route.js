const express = require('express');

const { userController } = require('../controllers');
const { validateNameAndEmail, validatePassword } = require('../middlewares/registerFields');

const router = express.Router();

router.post('/', validateNameAndEmail, validatePassword, userController.registerUser);

module.exports = router;