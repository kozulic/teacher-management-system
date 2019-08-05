const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  student: { type: Schema.Types.ObjectId, ref: 'Student'},
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;