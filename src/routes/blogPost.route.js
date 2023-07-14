const express = require('express');

const { blogPostController } = require('../controllers');
const authMiddleware = require('../middlewares/validateAuthorization');

const router = express.Router();

router.get('/', authMiddleware, blogPostController.getAllPost);
router.get('/:id', authMiddleware, blogPostController.getByIdPost);

module.exports = router;