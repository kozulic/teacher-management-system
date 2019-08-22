const { Student } = require('../models');

const getAll = async (classId) => {
  try {
    return await Student.find({ class: classId },
      'firstName lastName email');
  } catch (err) {
    throw new Error(err.message);
  }
};

const get = async (studentId) => {
  try {
    return await Student.findById(studentId,
      'firstName lastName email phoneNumber address birthDate sex globalNote class');
  } catch (err) {
    throw new Error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Student.create(body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const update = async (studentId, body) => {
  try {
    return await Student.findByIdAndUpdate(studentId, body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const remove = async (studentId) => {
  try {
    await Student.findByIdAndRemove(studentId);
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