const { Note } = require('../models');

const getAll = async (studentId) => {
  try {
    return await Note.find({ student: studentId },
      'text date student');
  } catch (err) {
    console.error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Note.create(body);
  } catch (err) {
    console.error(err.message);
  }
};

const update = async (noteId, body) => {
  try {
    return await Note.findByIdAndUpdate(noteId, body);
  } catch (err) {
    console.error(err.message);
  }
};

const remove = async (noteId) => {
  try {
    await Note.findByIdAndRemove(noteId);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove
}