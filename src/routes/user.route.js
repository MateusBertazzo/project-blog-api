const express = require('express');

const { userController } = require('../controllers');
const { validateNameAndEmail, validatePassword } = require('../middlewares/registerFields');
const authMiddleware = require('../middlewares/validateAuthorization');

const router = express.Router();

router.get('/', authMiddleware, userController.getAllUsers);
router.post('/', validateNameAndEmail, validatePassword, userController.registerUser);

module.exports = router;