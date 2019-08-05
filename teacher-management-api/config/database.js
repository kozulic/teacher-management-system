const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DB, {useNewUrlParser: true, useFindAndModify: false}, (err) => {
  if (err) {
    throw err;
  }
  console.log('Successfully connected!');
});