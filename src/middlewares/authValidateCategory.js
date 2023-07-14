const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const authMiddlewareCategory = (req, res, next) => {
  const authorizationToken = req.headers.authorization;

  if (!authorizationToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = authorizationToken
    .includes('bearer') ? authorizationToken.split(' ')[1] : authorizationToken;

    const message = jwt.verify(token, secret);

    req.user = message;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authMiddlewareCategory;