const { Grade } = require('../models');

const getAll = async (studentId) => {
  try {
    return await Grade.find({ student: studentId },
      'subject grade');
  } catch (err) {
    console.error(err.message);
  }
};

const get = async (gradeId) => {
  try {
    return await Grade.findById(gradeId,
      'subject grade date note student');
  } catch (err) {
    console.error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Grade.create(body);
  } catch (err) {
    console.error(err.message);
  }
};

const update = async (gradeId, body) => {
  try {
    return await Grade.findByIdAndUpdate(gradeId, body);
  } catch (err) {
    console.error(err.message);
  }
};

const remove = async (gradeId) => {
  try {
    await Grade.findByIdAndRemove(gradeId);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
}