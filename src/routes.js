const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.post('/tasks', controllers.createTask);
router.get('/tasks', controllers.getTasks);
router.put('/tasks/:id', controllers.updateTask);
router.delete('/tasks/:id', controllers.deleteTask);

module.exports = router;
