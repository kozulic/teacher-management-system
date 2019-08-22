const { teacherService } = require('../services');

const login = async (req, res, next) => {
  try {
    const result = await teacherService.auth(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const register = async (req, res, next) => {
  try {
    const result = await teacherService.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const info = async (req, res, next) => {
  try {
    const result = await teacherService.info(req.teacherId);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

module.exports = {
  login,
  register,
  info
};