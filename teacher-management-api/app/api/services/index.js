const teacherService = require('./teacher');
const classService = require('./class');
const studentService = require('./student');
const gradeService = require('./grade');
const absenceService = require('./absence');
const noteService = require('./note');
const contactService = require('./contact');

module.exports = {
  teacherService,
  classService,
  studentService,
  gradeService,
  absenceService,
  noteService,
  contactService
}