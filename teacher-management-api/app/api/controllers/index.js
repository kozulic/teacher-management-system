const teacherController = require('./teacher');
const classController = require('./class');
const studentController = require('./student');
const absenceController = require('./absence');
const contactController = require('./contact');
const gradeController = require('./grade');
const noteController = require('./note');

module.exports = {
  teacherController,
  classController,
  studentController,
  absenceController,
  contactController,
  gradeController,
  noteController
};