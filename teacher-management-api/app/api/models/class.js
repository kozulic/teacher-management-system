const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  description: { type: String },
  subjects: [ String ],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;