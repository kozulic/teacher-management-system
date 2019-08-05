const { studentService } = require('../services');

const getAll = async (req, res) => {
  try {
    const students = await studentService.getAll(req.params.classId);
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const get = async (req, res) => {
  try {
    const result = await studentService.get(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const create = async (req, res) => {
  try {
    const result = await studentService.create(req.body);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const update = async (req, res) => {
  try {
    const result = await studentService.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const remove = async (req, res) => {
  try {
    await studentService.remove(req.params.id);
    res.json({message: 'Student removed!'});
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