module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/SDP_lab1/lib/db.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// lib/db.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$better$2d$sqlite3$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs, [project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
// This puts the database file right next to your package.json
const dbPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'database.sqlite');
const db = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$better$2d$sqlite3$29$__["default"](dbPath);
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
const __TURBOPACK__default__export__ = db;
}),
"[project]/OneDrive/Desktop/SDP_lab1/pages/api/tasks.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
// pages/api/tasks.js
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/lib/db.js [api] (ecmascript)");
;
function handler(req, res) {
    // --- GET: Fetch tasks (active by default, or archived if ?archived=1) ---
    // Inside the GET method, add sorting
    if (req.method === 'GET') {
        const showArchived = req.query.archived === '1';
        const sortBy = req.query.sort || 'id'; // default sort by id
        const allowedSorts = [
            'topic',
            'status',
            'due_date'
        ];
        // Only allow sorting by valid columns to prevent SQL injection
        const orderBy = allowedSorts.includes(sortBy) ? sortBy : 'id';
        const sql = showArchived ? `SELECT * FROM tasks WHERE archived = 1 ORDER BY ${orderBy}` : `SELECT * FROM tasks WHERE archived = 0 ORDER BY ${orderBy}`;
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"].prepare(sql);
        const tasks = stmt.all();
        return res.status(200).json(tasks);
    }
    // --- POST: Create a new task ---
    if (req.method === 'POST') {
        const { title, description, due_date, topic, status } = req.body;
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"].prepare(`
      INSERT INTO tasks (title, description, due_date, topic, status) 
      VALUES (?, ?, ?, ?, ?)
    `);
        const info = stmt.run(title, description, due_date, topic, status);
        return res.status(201).json({
            id: info.lastInsertRowid
        });
    }
    // --- PUT: Edit an existing task ---
    if (req.method === 'PUT') {
        const { id, title, description, due_date, topic, status } = req.body;
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"].prepare(`
      UPDATE tasks 
      SET title = ?, description = ?, due_date = ?, topic = ?, status = ? 
      WHERE id = ?
    `);
        const info = stmt.run(title, description, due_date, topic, status, id);
        return res.status(200).json({
            id: id
        }); // Return the ID we updated
    }
    // --- PATCH: Archive a task (use PATCH, not ARCHIVE) ---
    if (req.method === 'PATCH') {
        const { id } = req.body;
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"].prepare(`
      UPDATE tasks 
      SET archived = 1 
      WHERE id = ?
    `);
        stmt.run(id);
        return res.status(200).json({
            id: id
        });
    }
    // --- If any other method is used, return error ---
    return res.status(405).json({
        error: 'Method not allowed'
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11b4pbs._.js.map