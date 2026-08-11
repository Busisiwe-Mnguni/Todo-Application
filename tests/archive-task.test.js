
const path = require('path');
const os = require('os');
const fs = require('fs');

const dbPath = path.join(os.tmpdir(), `test-archive-${Date.now()}-${Math.random()}.db`);
process.env.DB_PATH = dbPath;

const handler = require('../pages/api/tasks').default;
const db = require('../lib/db');
const createMockReqRes = require('./helpers/mockReqRes');

afterAll(() => {
  db.close();
  fs.unlinkSync(dbPath);
});

test('archiving a task removes it from the active list but keeps it viewable in the archived list', async () => {
  // Create a task to archive
  const { req: postReq, res: postRes } = createMockReqRes({
    method: 'POST',
    body: {
      title: 'Old task',
      description: '',
      due_date: '2026-01-01',
      topic: 'General',
      status: 'Todo',
    },
  });
  await handler(postReq, postRes);
  const taskId = postRes.jsonData.id;

  // Archive it
  const { req: patchReq, res: patchRes } = createMockReqRes({
    method: 'PATCH',
    body: { id: taskId },
  });
  await handler(patchReq, patchRes);
  expect(patchRes.statusCode).toBe(200);

  // It should no longer appear in the active list
  const { req: activeReq, res: activeRes } = createMockReqRes({
    method: 'GET',
    query: { archived: '0' },
  });
  await handler(activeReq, activeRes);
  expect(activeRes.jsonData.find((t) => t.id === taskId)).toBeUndefined();

  // But it should still be viewable in the archived list, data intact
  const { req: archivedReq, res: archivedRes } = createMockReqRes({
    method: 'GET',
    query: { archived: '1' },
  });
  await handler(archivedReq, archivedRes);
  const archivedTask = archivedRes.jsonData.find((t) => t.id === taskId);
  expect(archivedTask).toBeDefined();
  expect(archivedTask.title).toBe('Old task');
  expect(archivedTask.archived).toBe(1);
});