const { Absence } = require('../models');

const getAll = async (studentId) => {
  try {
    return await Absence.find({ student: studentId },
      'hours reason date student');
  } catch (err) {
    throw new Error(err.message);
  }
};

const get = async (absenceId) => {
  try {
    return await Absence.findById(absenceId, 'hours reason date');
  } catch (err) {
    throw new Error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Absence.create(body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const update = async (absenceId, body) => {
  try {
    return await Absence.findByIdAndUpdate(absenceId, body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const remove = async (absenceId) => {
  try {
    await Absence.findByIdAndRemove(absenceId);
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