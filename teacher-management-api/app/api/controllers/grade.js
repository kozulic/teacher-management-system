const { gradeService } = require('../services');

const getAll = async (req, res) => {
  try {
    const grades = await gradeService.getAll(req.params.studentId);
    res.json(grades);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const get = async (req, res) => {
  try {
    const result = await gradeService.get(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const create = async (req, res) => {
  try {
    const result = await gradeService.create(req.body);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const update = async (req, res) => {
  try {
    const result = await gradeService.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const remove = async (req, res) => {
  try {
    await gradeService.remove(req.params.id);
    res.json({message: 'Grade removed!'});
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};