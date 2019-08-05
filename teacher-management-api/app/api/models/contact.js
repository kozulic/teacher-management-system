const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  student: { type: Schema.Types.ObjectId, ref: 'Student'},
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
  relationship: { type: String }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;