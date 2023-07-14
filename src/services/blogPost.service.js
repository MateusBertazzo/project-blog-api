const { BlogPost, Category, User } = require('../models');

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: 
    [
      {
        model: Category,
        as: 'categories',
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, 
    ],
  });
  return { type: null, message: posts };
};

const getByIdPost = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: 
    [
      {
        model: Category,
        as: 'categories',
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, 
    ],
  });

  if (!post) {
    return { type: 'POST_INVALID', message: 'Post does not exist' };
  }

  return { type: null, message: post };
};

module.exports = {
  getAllPost,
  getByIdPost,
};