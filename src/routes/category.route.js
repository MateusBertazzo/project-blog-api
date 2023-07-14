const express = require('express');

const { categoryController } = require('../controllers');
const authMiddlewareCategory = require('../middlewares/authValidateCategory');
const verifyBodyNameCategory = require('../middlewares/categoryFields');

const router = express.Router();

router.post(
'/', 
verifyBodyNameCategory,
authMiddlewareCategory, 
categoryController.registerCategory,
);

module.exports = router;