const { noteService } = require('../services');

const getAll = async (req, res) => {
  try {
    const notes = await noteService.getAll(req.params.studentId);
    res.json(notes);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const get = async (req, res) => {
  try {
    const result = await noteService.get(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};


const create = async (req, res) => {
  try {
    const result = await noteService.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const update = async (req, res) => {
  try {
    const result = await noteService.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

const remove = async (req, res) => {
  try {
    await noteService.remove(req.params.id);
    res.json({message: 'Note removed!'});
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