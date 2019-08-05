const express = require('express');

const { noteController } = require('../controllers');

const router = express.Router();

router.get('/student/:studentId', noteController.getAll);
router.post('/', noteController.create);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.remove);

module.exports = router;