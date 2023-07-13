const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = 'mySecret';
const config = {
  algorithm: 'HS256',
};

const TokenUser = (result) => {
  jwt.sign(result, secret, config);
};