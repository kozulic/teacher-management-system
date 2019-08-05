const jwt = require('jsonwebtoken');

require('dotenv').config();

const verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }

    try {
      const result = await jwt.verify(token, process.env.SECRET);
      req.teacherId = result.id;
      next();
    } catch (err) {
      console.error(err.message);
      res.status(500).json({msg: 'Authentication failed'});
      next(err);
  }
}

module.exports = verifyToken;