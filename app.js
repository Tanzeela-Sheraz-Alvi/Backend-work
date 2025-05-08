
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let currentId = 1;


app.post('/addTask', (req, res) => {
  const { taskName } = req.body;
  if (!taskName) {
    return res.status(400).json({ error: 'taskName is required' });
  }
  const newTask = { id: currentId++, taskName };
  tasks.push(newTask);
  res.status(201).json({ message: 'Task added successfully', task: newTask });
});


app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.delete('/task/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = tasks.splice(index, 1);
  res.json({ message: 'Task deleted successfully', deletedTask });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

