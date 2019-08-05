const express = require('express');

const { contactController } = require('../controllers');

const router = express.Router();

router.get('/student/:studentId', contactController.getAll);
router.get('/:id', contactController.get);
router.post('/', contactController.create);
router.put('/:id', contactController.update);
router.delete('/:id', contactController.remove);

module.exports = router;