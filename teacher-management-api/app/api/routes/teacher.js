const express = require('express');

const { teacherController } = require('../controllers');
const verifyToken = require('../middleware/verify-token');

const router = express.Router();

router.post('/register', teacherController.register);
router.post('/auth', teacherController.login);
router.get('/info', verifyToken, teacherController.info);

module.exports = router;