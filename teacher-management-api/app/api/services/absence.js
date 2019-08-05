const { Absence } = require('../models');

const getAll = async (studentId) => {
  try {
    return await Absence.find({ student: studentId },
      'hours reason date student');
  } catch (err) {
    console.error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Absence.create(body);
  } catch (err) {
    console.error(err.message);
  }
};

const update = async (absenceId, body) => {
  try {
    return await Absence.findByIdAndUpdate(absenceId, body);
  } catch (err) {
    console.error(err.message);
  }
};

const remove = async (absenceId) => {
  try {
    await Absence.findByIdAndRemove(absenceId);
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