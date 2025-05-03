const tasks = require('../data/tasks');
let currentId = 1;

const addTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Task title is required." });
  }
  const newTask = { id: currentId++, title };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(t => t.id == id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found." });
  }
  const deleted = tasks.splice(taskIndex, 1);
  res.json({ message: "Task deleted.", task: deleted[0] });
};

module.exports = { addTask, getAllTasks, deleteTask };
