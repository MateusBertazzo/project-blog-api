const validateNameAndEmail = (req, res, next) => {
  const { displayName, email } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  validateNameAndEmail,
  validatePassword,
};