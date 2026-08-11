// A task is overdue if its due date has passed and it isn't Complete.
// `referenceDate` defaults to "now" for real use, but tests pass an
// explicit date so results are deterministic regardless of when they run.

function isOverdue(task, referenceDate = new Date()) {
  if (!task || !task.due_date) return false;
  if (task.status === 'Complete') return false;
  return new Date(task.due_date) < referenceDate;
}
 
module.exports = isOverdue;
 