const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = Schema({
  _id: Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: Number },
  address: {
    street: String,
    streetNum: Number,
    zipNum: Number,
    city: String
  },
  birthDate: { type: Date },
  sex: { type: String },
  globalNote: { type: String },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  contacts: [ { type: Schema.Types.ObjectId, ref: 'Contact' } ],
  grades: [{ type: Schema.Types.ObjectId, ref: 'Grade' }],
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
  absences: [{ type: Schema.Types.ObjectId, ref: 'Absence' }]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;