const { Category } = require('../models');

const registerCategory = async (name) => {
  const category = await Category.create({ name });

  return { type: null, message: category.dataValues };
};

module.exports = {
  registerCategory,
};