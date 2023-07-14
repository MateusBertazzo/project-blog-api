const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authorizationToken = req.headers.authorization;

  if (!authorizationToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = authorizationToken.split(' ')[1];

    const decod = jwt.verify(token, secret);

    req.user = decod;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authMiddleware;
