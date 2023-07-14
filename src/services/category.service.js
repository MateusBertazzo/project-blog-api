const { Category } = require('../models');

const registerCategory = async (name) => {
  const category = await Category.create({ name });

  return { type: null, message: category.dataValues };
};

const getAllCategorys = async () => {
  const categorys = await Category.findAll();

  return { type: null, message: categorys };
};

module.exports = {
  registerCategory,
  getAllCategorys,
};