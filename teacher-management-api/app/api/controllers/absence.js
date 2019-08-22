const { absenceService } = require('../services');

const getAll = async (req, res) => {
  try {
    const absences = await absenceService.getAll(req.params.studentId);
    res.json(absences);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const get = async (req, res) => {
  try {
    const result = await absenceService.get(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const create = async (req, res) => {
  try {
    const result = await absenceService.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const update = async (req, res) => {
  try {
    const result = await absenceService.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const remove = async (req, res) => {
  try {
    await absenceService.remove(req.params.id);
    res.json({message: 'Absence removed!'});
  } catch (err) {
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