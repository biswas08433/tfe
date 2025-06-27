// SQLite database configuration using Bun's built-in SQLite module
import { Database } from 'bun:sqlite';
import { join } from 'node:path';

// Define the database file path
const DB_PATH = join(process.cwd(), 'src/lib/database/messages.db');

// Initialize the database connection
export const db = new Database(DB_PATH);

// Setup function to initialize database tables
export function setupDatabase() {
  // Create messages table if it doesn't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      trek_interest TEXT,
      message TEXT NOT NULL,
      subscribe BOOLEAN DEFAULT 0,
      handled BOOLEAN DEFAULT 0,
      handled_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  console.log('Database initialized successfully');
}

// Run setup on import
setupDatabase();

// Message-related functions
export function saveMessage(messageData) {
  const { name, email, phone, trekInterest, message, subscribe } = messageData;
  
  const stmt = db.prepare(`
    INSERT INTO messages (name, email, phone, trek_interest, message, subscribe)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  
  const result = stmt.run(name, email, phone, trekInterest, message, subscribe ? 1 : 0);
  return result;
}

export function getAllMessages() {
  return db.query('SELECT * FROM messages ORDER BY created_at DESC').all();
}

export function getMessageById(id) {
  return db.query('SELECT * FROM messages WHERE id = ?').get(id);
}

export function markMessageAsHandled(id) {
  const stmt = db.prepare(`
    UPDATE messages
    SET handled = 1, handled_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `);
  
  const result = stmt.run(id);
  return result;
}
