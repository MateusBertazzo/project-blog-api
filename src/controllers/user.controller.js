const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'secret';
const config = {
  algorithm: 'HS256',
};

const TokenUser = (result) => jwt.sign(result, secret, config);

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await userService.loginUser(email, password);

  if (type) {
    return res.status(400).json({ message });
  }

  const payload = {
    email: message.email,
    id: message.id,
  };

  const token = TokenUser(payload);

  res.status(200).json({ token });
};

const registerUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { type, message } = await userService.registerUser(displayName, email, password, image);

  if (type) {
    return res.status(409).json({ message });
  }

  const payload = {
    email: message.email,
    id: message.id,
  };

  const token = TokenUser(payload);

  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const { message } = await userService.getAllUsers();

  return res.status(200).json(message);
};

module.exports = {
  loginUser,
  registerUser,
  getAllUsers,
};