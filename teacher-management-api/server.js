const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const database = require('./config/database');

const { 
  teacherRoutes, 
  classRoutes, 
  studentRoutes,
  absenceRoutes,
  gradeRoutes,
  contactRoutes,
  noteRoutes } = require('./app/api/routes');
const verifyToken = require('./app/api/middleware/verify-token');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/teacher', teacherRoutes);
app.use('/api/class', verifyToken, classRoutes);
app.use('/api/student', verifyToken, studentRoutes);
app.use('/api/grade', verifyToken, gradeRoutes);
app.use('/api/contact', verifyToken, contactRoutes);
app.use('/api/absence', verifyToken, absenceRoutes);
app.use('/api/note', verifyToken, noteRoutes);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});