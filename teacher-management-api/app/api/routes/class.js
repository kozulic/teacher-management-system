const express = require('express');

const { classController } = require('../controllers');

const router = express.Router();

router.get('/teacher/:teacherId', classController.getAll);
router.get('/:id', classController.get);
router.get('/:id/subjects', classController.getSubjects);
router.post('/', classController.create);
router.put('/:id', classController.update);
router.delete('/:id', classController.remove);

module.exports = router;