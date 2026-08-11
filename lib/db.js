// lib/db.js
import Database from 'better-sqlite3';
import path from 'path';

// This puts the database file right next to your package.json
//const dbPath = path.join(process.cwd(), 'database.sqlite');
const dbPath = process.env.DB_PATH || path.join(process.cwd(), 'database.sqlite');

const db = new Database(dbPath);

// Create the tasks table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    due_date TEXT NOT NULL,
    topic TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('Todo', 'In-Progress', 'Complete')),
    archived INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('SQLite database connected and table ready!');
export default db;