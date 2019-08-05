const express = require('express');

const { gradeController } = require('../controllers');

const router = express.Router();

router.get('/student/:studentId', gradeController.getAll);
router.get('/:id', gradeController.get);
router.post('/', gradeController.create);
router.put('/:id', gradeController.update);
router.delete('/:id', gradeController.remove);

module.exports = router;