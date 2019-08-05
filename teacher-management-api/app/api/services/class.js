const { Class } = require('../models');

const getAll = async (teacherId) => {
  try {
    return await Class.find({ owner: teacherId }, 'name description');
  } catch (err) {
    console.error(err.message);
  }
};

const get = async (classId) => {
  try {
    return await Class.findById(classId, 'name description subjects');
  } catch (err) {
    console.error(err.message);
  }
}; 

const getSubjects = async (classId) => {
  try {
    return await Class.findById(classId, 'subjects');
  } catch (err) {
    console.error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Class.create(body);
  } catch (err) {
    console.error(err.message);
  }
};

const update = async (classId, body) => {
  try {
    return await Class.findByIdAndUpdate(classId, body);
  } catch (err) {
    console.error(err.message);
  }
};

const remove = async (classId) => {
  try {
    await Class.findByIdAndRemove(classId);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAll,
  get,
  getSubjects,
  create,
  update,
  remove
}