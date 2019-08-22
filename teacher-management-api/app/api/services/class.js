const { Class } = require('../models');

const getAll = async (teacherId) => {
  try {
    return await Class.find({ owner: teacherId }, 'name description');
  } catch (err) {
    throw new Error(err.message);
  }
};

const get = async (classId) => {
  try {
    return await Class.findById(classId, 'name description subjects');
  } catch (err) {
    throw new Error(err.message);
  }
}; 

const getSubjects = async (classId) => {
  try {
    return await Class.findById(classId, 'subjects');
  } catch (err) {
    throw new Error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Class.create(body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const update = async (classId, body) => {
  try {
    return await Class.findByIdAndUpdate(classId, body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const remove = async (classId) => {
  try {
    await Class.findByIdAndRemove(classId);
  } catch (err) {
    throw new Error(err.message);
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