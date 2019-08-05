const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gradeSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  student: { type: Schema.Types.ObjectId, ref: 'Student'},
  subject: { type: String, required: true },
  grade: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  note: { type: String }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;