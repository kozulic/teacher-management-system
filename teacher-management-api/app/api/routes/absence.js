const express = require('express');

const { absenceController } = require('../controllers');

const router = express.Router();

router.get('/student/:studentId', absenceController.getAll);
router.get('/:id', absenceController.get);
router.post('/', absenceController.create);
router.put('/:id', absenceController.update);
router.delete('/:id', absenceController.remove);

module.exports = router;