const express = require('express');
const router = express.Router();
const db = require('../dbconfig/db');

// Get all tasks
router.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new task
router.post('/task', (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, title, completed: false });
  });
});

// Update a task
router.put('/task/:id', (req, res) => {
  const { title, completed } = req.body;
  db.query(
    'UPDATE tasks SET title = ?, completed = ? WHERE id = ?',
    [title, completed, req.params.id],
    (err) => {
      if (err) throw err;
      res.json({ id: req.params.id, title, completed });
    }
  );
});

// Delete a task
router.delete('/task/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Task deleted' });
  });
});

module.exports = router;
