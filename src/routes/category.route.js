const express = require('express');

const { categoryController } = require('../controllers');
const authMiddlewareCategory = require('../middlewares/authValidateCategory');
const authMiddleware = require('../middlewares/validateAuthorization');
const verifyBodyNameCategory = require('../middlewares/categoryNameFields');

const router = express.Router();

router.post(
'/', 
verifyBodyNameCategory,
authMiddlewareCategory,
categoryController.registerCategory,
);

router.get('/', authMiddleware, categoryController.getAllCategorys);

module.exports = router;