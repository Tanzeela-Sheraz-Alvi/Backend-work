const express = require('express');
const router = express.Router();
const {
  addTask,
  getAllTasks,
  deleteTask
} = require('../controllers/taskController');

// Use /tasks prefix in all routes
router.post('/addTask', addTask);   // POST /tasks/addTask
router.get('/', getAllTasks);  // GET /tasks
router.delete('/:id', deleteTask);  // DELETE /tasks/:id

module.exports = router;
