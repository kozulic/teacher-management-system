const { Student } = require('../models');

const getAll = async (classId) => {
  try {
    return await Student.find({ class: classId },
      'firstName lastName email');
  } catch (err) {
    console.error(err.message);
  }
};

const get = async (studentId) => {
  try {
    return await Student.findById(studentId,
      'firstName lastName email phoneNumber address birthDate sex globalNote');
  } catch (err) {
    console.error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Student.create(body);
  } catch (err) {
    console.error(err.message);
  }
};

const update = async (studentId, body) => {
  try {
    return await Student.findByIdAndUpdate(studentId, body);
  } catch (err) {
    console.error(err.message);
  }
};

const remove = async (studentId) => {
  try {
    await Student.findByIdAndRemove(studentId);
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