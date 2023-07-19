const express = require('express');

const { blogPostController } = require('../controllers');
const authMiddleware = require('../middlewares/validateAuthorization');
const validateFieldsBlogPost = require('../middlewares/validateFieldsBlogPost');

const router = express.Router();

router.get('/', authMiddleware, blogPostController.getAllPost);
router.get('/:id', authMiddleware, blogPostController.getByIdPost);
router.put('/:id', authMiddleware, validateFieldsBlogPost, blogPostController.blogPostUpdate);

module.exports = router;