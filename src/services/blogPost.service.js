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

const blogPostUpdate = async (idUserToken, userId, body) => {
  const dataPost = await getByIdPost(userId);

  if (dataPost.message.userId !== idUserToken) {
    return { type: 'PERMISSION_DENIED', message: 'Unauthorized user' };
  }

  await BlogPost.update(body, { where: { userId } });
  
  const updatePost = await getByIdPost(userId);
  return { type: null, message: updatePost.message };
};

module.exports = {
  getAllPost,
  getByIdPost,
  blogPostUpdate,
};