const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const absenceSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  student: { type: Schema.Types.ObjectId, ref: 'Student'},
  hours: { type: Number, required: true },
  reason: { type: String, default: 'Unknown' },
  date: { type: Date, default: Date.now }
});

const Absence = mongoose.model('Absence', absenceSchema);

module.exports = Absence;