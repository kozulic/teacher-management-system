const { contactService } = require('../services');

const getAll = async (req, res) => {
  try {
    const contacts = await contactService.getAll(req.params.studentId);
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const get = async (req, res) => {
  try {
    const result = await contactService.get(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const create = async (req, res) => {
  try {
    const result = await contactService.create(req.body);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const update = async (req, res) => {
  try {
    const result = await contactService.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: err.message});
  }
};

const remove = async (req, res) => {
  try {
    await contactService.remove(req.params.id);
    res.json({message: 'Contact removed!'});
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