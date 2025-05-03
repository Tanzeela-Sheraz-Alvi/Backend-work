const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Middleware to parse JSON in request body
app.use(express.json());

// Default home route
app.get('/', (req, res) => {
  res.send('To-Do List API is running');
});

// Task routes under /tasks prefix
app.use('/tasks', taskRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
