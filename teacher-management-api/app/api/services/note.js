const { Note } = require('../models');

const getAll = async (studentId) => {
  try {
    return await Note.find({ student: studentId },
      'text date student');
  } catch (err) {
    throw new Error(err.message);
  }
};

const get = async (noteId) => {
  try {
    return await Note.findById(noteId, 'text date student');
  } catch (err) {
    throw new Error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Note.create(body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const update = async (noteId, body) => {
  try {
    return await Note.findByIdAndUpdate(noteId, body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const remove = async (noteId) => {
  try {
    await Note.findByIdAndRemove(noteId);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
}