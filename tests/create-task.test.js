
const path = require('path');
const os = require('os');
const fs = require('fs');
 
// Must be set BEFORE lib/db (and anything that imports it) is required —
// see the note in lib/db.js. Using require() here, not import, is what
// guarantees this line actually runs first.
const dbPath = path.join(os.tmpdir(), `test-create-${Date.now()}-${Math.random()}.db`);
process.env.DB_PATH = dbPath;
 
const handler = require('../pages/api/tasks').default;
const db = require('../lib/db');
const createMockReqRes = require('./helpers/mockReqRes');
 
afterAll(() => {
  db.close();
  fs.unlinkSync(dbPath);
});
 
test('creating a task stores all four required fields and it appears in the active list', async () => {
  const { req: postReq, res: postRes } = createMockReqRes({
    method: 'POST',
    body: {
      title: 'Write lab tests',
      description: 'Cover create, archive and overdue behaviour',
      due_date: '2026-12-31',
      topic: 'COMS3011A',
      status: 'Todo',
    },
  });
 
  await handler(postReq, postRes);
 
  expect(postRes.statusCode).toBe(201);
  expect(postRes.jsonData.id).toBeDefined();
 
  const { req: getReq, res: getRes } = createMockReqRes({
    method: 'GET',
    query: { archived: '0' },
  });
 
  await handler(getReq, getRes);
 
  expect(getRes.statusCode).toBe(200);
 
  const created = getRes.jsonData.find((t) => t.id === postRes.jsonData.id);
  expect(created).toBeDefined();
  expect(created.title).toBe('Write lab tests');
  expect(created.topic).toBe('COMS3011A');
  expect(created.due_date).toBe('2026-12-31');
  expect(created.status).toBe('Todo');
  expect(created.archived).toBe(0);
});
 