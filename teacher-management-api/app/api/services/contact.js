const { Contact } = require('../models');

const getAll = async (studentId) => {
  try {
    return await Contact.find({ student: studentId },
      'firstName lastName relationship email phoneNumber');
  } catch (err) {
    throw new Error(err.message);
  }
};

const get = async (contactId) => {
  try {
    return await Contact.findById(contactId,
      'firstName lastName email phoneNumber address relationship student');
  } catch (err) {
    throw new Error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Contact.create(body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const update = async (contactId, body) => {
  try {
    return await Contact.findByIdAndUpdate(contactId, body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const remove = async (contactId) => {
  try {
    await Contact.findByIdAndRemove(contactId);
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