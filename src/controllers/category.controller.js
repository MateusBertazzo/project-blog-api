const { categoryService } = require('../services');

const registerCategory = async (req, res) => {
  const { name } = req.body;

  const { message } = await categoryService.registerCategory(name);

  return res.status(201).json(message);
};

module.exports = {
  registerCategory,
};