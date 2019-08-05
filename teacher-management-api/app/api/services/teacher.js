const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { Teacher } = require('../models');

require('dotenv').config();

const create = async (body) => {
  try {
    const teacher = await Teacher.findOne({ email: body.email });
    if (teacher) {
      throw new Error('Teacher with this email aready exist.');
    }

    body.password = bcrypt.hashSync(body.password, 10);

    // Delete password field from object
    let registeredTeacher = await Teacher.create(body);
    registeredTeacher = registeredTeacher.toObject();
    delete registeredTeacher.password;

    const token = jwt.sign({ id: registeredTeacher._id }, process.env.SECRET, { expiresIn: '1h' });

    return {
      teacher: registeredTeacher,
      token
    };
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};

const auth = async (body) => {
  try {
    const teacher = await Teacher.findOne({ email: body.email }, 'firstName lastName email password');
    if (!teacher) {
      throw new Error('No teacher with this email.');
    }

    const validPassword = bcrypt.compareSync(body.password, teacher.password);
    if (!validPassword) {
      throw new Error('Invalid password.');
    }

    const token = jwt.sign({ id: teacher._id }, process.env.SECRET, { expiresIn: '1h' });
    
    return {
      teacher,
      token
    };
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const info = async (teacherId) => {
  try {
    const teacher = await Teacher.findById(teacherId, 'firstName lastName email');
    if (!teacher) {
      throw new Error('No teacher with given id');
    }
    return teacher;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  create,
  auth,
  info
}