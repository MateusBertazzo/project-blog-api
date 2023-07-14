const { User } = require('../models');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return { type: 'INVALID_USER', message: 'Invalid fields' };
  }
  return { type: null, message: user.dataValues };
};

const registerUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return { type: 'USER_REGISTERED', message: 'User already registered' };
  }

  const createUser = await User.create({ displayName, email, password, image });

  return { type: null, message: createUser.dataValues };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  
  return { type: null, message: users };
};

module.exports = {
  loginUser,
  registerUser,
  getAllUsers,
};