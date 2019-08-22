const { Grade } = require('../models');

const getAll = async (studentId) => {
  try {
    return await Grade.find({ student: studentId },
      'subject grade');
  } catch (err) {
    throw new Error(err.message);
  }
};

const get = async (gradeId) => {
  try {
    return await Grade.findById(gradeId,
      'subject grade date note student');
  } catch (err) {
    throw new Error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Grade.create(body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const update = async (gradeId, body) => {
  try {
    return await Grade.findByIdAndUpdate(gradeId, body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const remove = async (gradeId) => {
  try {
    await Grade.findByIdAndRemove(gradeId);
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