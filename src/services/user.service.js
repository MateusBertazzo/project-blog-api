const { User } = require('../models');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return { type: 'INVALID_USER', message: 'Invalid fields' };
  }
  return { type: null, message: user.dataValues };
};

module.exports = {
  loginUser,
};