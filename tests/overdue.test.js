
// Pure function test — no database needed. A fixed reference date is
// passed explicitly so these results never depend on when the test runs.
const isOverdue = require('../lib/isOverdue');

const REFERENCE_DATE = new Date('2026-08-11T00:00:00Z');

test('a task past its due date and not Complete is overdue', () => {
  const task = { due_date: '2026-08-01', status: 'Todo' };
  expect(isOverdue(task, REFERENCE_DATE)).toBe(true);
});

test('a task past its due date but Complete is NOT overdue', () => {
  const task = { due_date: '2026-08-01', status: 'Complete' };
  expect(isOverdue(task, REFERENCE_DATE)).toBe(false);
});

test('a task whose due date has not yet passed is NOT overdue', () => {
  const task = { due_date: '2026-09-01', status: 'In-Progress' };
  expect(isOverdue(task, REFERENCE_DATE)).toBe(false);
});