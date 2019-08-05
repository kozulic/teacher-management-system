const express = require('express');

const { absenceController } = require('../controllers');

const router = express.Router();

router.get('/student/:studentId', absenceController.getAll);
router.post('/', absenceController.create);
router.put('/:id', absenceController.update);
router.delete('/:id', absenceController.remove);

module.exports = router;