const { blogPostService } = require('../services');

const getAllPost = async (_req, res) => {
  const { message } = await blogPostService.getAllPost();

  return res.status(200).json(message);
};

module.exports = {
  getAllPost,
};