const { blogPostService } = require('../services');

const getAllPost = async (_req, res) => {
  const { message } = await blogPostService.getAllPost();

  return res.status(200).json(message);
};

const getByIdPost = async (req, res) => {
  const { id } = req.params;
  console.log(`DASDSADSADASDASdasdasdasdasdasdasdasdasdasdas ${id}`);
  const { type, message } = await blogPostService.getByIdPost(id);
  console.log(message);
  if (type) {
    return res.status(404).json({ message });
  }

  return res.status(200).json(message);
};

module.exports = {
  getAllPost,
  getByIdPost,
};