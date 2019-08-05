const { classService } = require('../services');

const getAll = async (req, res) => {
  try {
    const classes = await classService.getAll(req.params.teacherId);
    res.json(classes);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const get = async (req, res) => {
  try {
    const result = await classService.get(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const getSubjects = async (req, res) => {
  try {
    const result = await classService.getSubjects(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const create = async (req, res) => {
  try {
    const result = await classService.create(req.body);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const update = async (req, res) => {
  try {
    const result = await classService.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const remove = async (req, res) => {
  try {
    await classService.remove(req.params.id);
    res.json({message: 'Class removed!'});
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

module.exports = {
  getAll,
  get,
  getSubjects,
  create,
  update,
  remove
};