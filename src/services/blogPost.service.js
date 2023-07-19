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

const blogPostUpdate = async (idUserParam, dataBaseId, body) => {
  const dataUser = await getByIdPost(dataBaseId);
  if (!dataUser) {
    return { type: 'INVALID_ID', message: 'Invalid Id' };
  }

  if (dataUser.userId !== idUserParam) {
    return { type: 'PERMISSION_DENIED', message: 'Unauthorized user' };
  }

  await BlogPost.update(body, { where: { dataBaseId } });

  return { type: null, message: dataUser };
};

module.exports = {
  getAllPost,
  getByIdPost,
  blogPostUpdate,
};