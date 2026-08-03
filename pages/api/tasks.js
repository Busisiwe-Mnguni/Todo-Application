// pages/api/tasks.js
import db from '../../lib/db';

export default function handler(req, res) {
  // --- GET: Fetch tasks (active by default, or archived if ?archived=1) ---
// Inside the GET method, add sorting
if (req.method === 'GET') {
  const showArchived = req.query.archived === '1';
  const sortBy = req.query.sort || 'id'; // default sort by id
  const allowedSorts = ['topic', 'status', 'due_date'];
  
  // Only allow sorting by valid columns to prevent SQL injection
  const orderBy = allowedSorts.includes(sortBy) ? sortBy : 'id';
  
  const sql = showArchived 
    ? `SELECT * FROM tasks WHERE archived = 1 ORDER BY ${orderBy}`
    : `SELECT * FROM tasks WHERE archived = 0 ORDER BY ${orderBy}`;
    
  const stmt = db.prepare(sql);
  const tasks = stmt.all();
  return res.status(200).json(tasks);
}

  // --- POST: Create a new task ---
  if (req.method === 'POST') {
    const { title, description, due_date, topic, status } = req.body;
    
    const stmt = db.prepare(`
      INSERT INTO tasks (title, description, due_date, topic, status) 
      VALUES (?, ?, ?, ?, ?)
    `);
    const info = stmt.run(title, description, due_date, topic, status);
    
    return res.status(201).json({ id: info.lastInsertRowid });
  }

  // --- PUT: Edit an existing task ---
  if (req.method === 'PUT') {
    const { id, title, description, due_date, topic, status } = req.body;
    
    const stmt = db.prepare(`
      UPDATE tasks 
      SET title = ?, description = ?, due_date = ?, topic = ?, status = ? 
      WHERE id = ?
    `);
    const info = stmt.run(title, description, due_date, topic, status, id);
    
    return res.status(200).json({ id: id }); // Return the ID we updated
  }

  // --- PATCH: Archive a task (use PATCH, not ARCHIVE) ---
  if (req.method === 'PATCH') {
    const { id } = req.body;
    
    const stmt = db.prepare(`
      UPDATE tasks 
      SET archived = 1 
      WHERE id = ?
    `);
    stmt.run(id);
    
    return res.status(200).json({ id: id });
  }

  // --- If any other method is used, return error ---
  return res.status(405).json({ error: 'Method not allowed' });
}