const express = require('express');

const { userController } = require('../controllers');
const { verifyFields } = require('../middlewares/loginFields');

const router = express.Router();

router.post('/', verifyFields, userController.loginUser);

module.exports = router;