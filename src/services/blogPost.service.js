const { BlogPost, category, User } = require('../models');

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: 
    [
      {
        model: category,
        as: 'categories',
        through: { attributes: [] },
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

module.exports = {
  getAllPost,
};