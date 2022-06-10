
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.KEY_TOKEN_PASSWORD);
    const user_id = decodedToken.user_id;
    if (req.body.user_id && req.body.userId !== user_id) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Request invalide!')
    });
  }
};