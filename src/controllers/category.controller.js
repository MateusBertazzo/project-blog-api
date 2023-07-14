const { categoryService } = require('../services');

const registerCategory = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await categoryService.registerCategory(name);

  if (type) {
    return res.status(400).send();
  }

  return res.status(201).json(message);
};

module.exports = {
  registerCategory,
};