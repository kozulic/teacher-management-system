const express = require('express');

const { studentController } = require('../controllers');

const router = express.Router();

router.get('/class/:classId', studentController.getAll);
router.get('/:id', studentController.get);
router.post('/', studentController.create);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.remove);

module.exports = router;