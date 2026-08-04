// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  // State for storing the list of tasks
  const [tasks, setTasks] = useState([]);

  // State for toggling between active and archived views
  const [showArchived, setShowArchived] = useState(false);

  // If not null, holds the id of the task currently being edited.
  // When null, the form is in "create" mode.
  const [editingId, setEditingId] = useState(null);

  // State for the form inputs
  const [form, setForm] = useState({
    title: '',
    description: '',
    due_date: '',
    topic: '',
    status: 'Todo'
  });

  // Function to fetch tasks from the API
  // Pass archived explicitly so we're not relying on stale closure state
  const fetchTasks = async (archived = showArchived) => {
    const res = await fetch(`/api/tasks?archived=${archived ? '1' : '0'}`);
    const data = await res.json();
    setTasks(data);
  };

  // Load tasks when the page first loads, and whenever the view toggles
  useEffect(() => {
    fetchTasks(showArchived);
  }, [showArchived]);

  // Handle form submission (Create OR Edit, depending on editingId)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop page refresh

    if (editingId) {
      // Editing an existing task
      await fetch('/api/tasks', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingId, ...form }),
      });
    } else {
      // Creating a new task
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }

    // Clear the form and exit edit mode
    setForm({ title: '', description: '', due_date: '', topic: '', status: 'Todo' });
    setEditingId(null);

    // Make sure we're looking at the active list and refresh it
    setShowArchived(false);
    fetchTasks(false);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Populate the form with an existing task's data and switch to edit mode
  const startEdit = (task) => {
    setEditingId(task.id);
    setForm({
      title: task.title,
      description: task.description || '',
      due_date: task.due_date,
      topic: task.topic,
      status: task.status
    });
  };

  // Leave edit mode without saving
  const cancelEdit = () => {
    setEditingId(null);
    setForm({ title: '', description: '', due_date: '', topic: '', status: 'Todo' });
  };

  // Handle archiving a task
  const archiveTask = async (id) => {
    await fetch('/api/tasks', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    // Refresh whichever view is currently showing
    fetchTasks(showArchived);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My Todo App</h1>

      {/* --- CREATE / EDIT TASK FORM --- */}
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
        <h3>{editingId ? 'Edit Task' : 'Create New Task'}</h3>

        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <br />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <br />
        <input name="due_date" type="date" value={form.due_date} onChange={handleChange} required />
        <br />
        <input name="topic" placeholder="Topic" value={form.topic} onChange={handleChange} required />
        <br />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Todo">Todo</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Complete">Complete</option>
        </select>
        <br />
        <button type="submit">{editingId ? 'Save Changes' : 'Add Task'}</button>
        {editingId && (
          <button type="button" onClick={cancelEdit} style={{ marginLeft: '8px' }}>
            Cancel
          </button>
        )}
      </form>

      {/* --- ACTIVE / ARCHIVED TOGGLE --- */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setShowArchived(false)} disabled={!showArchived}>
          Active Tasks
        </button>
        <button onClick={() => setShowArchived(true)} disabled={showArchived}>
          Archived Tasks
        </button>
      </div>

      <h2>{showArchived ? 'Archived Tasks' : 'Active Tasks'}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => {
          // Check if the task is overdue
          const today = new Date();
          const dueDate = new Date(task.due_date);
          const isOverdue = dueDate < today && task.status !== 'Complete';

          return (
            <li key={task.id} style={{
              border: '1px solid #ddd',
              margin: '5px 0',
              padding: '10px',
              backgroundColor: isOverdue ? '#ffe6e6' : 'white'
            }}>
              <strong>{task.title}</strong> <br />
              Topic: {task.topic} | Status: {task.status} | Due: {task.due_date}
              {isOverdue && <span style={{ color: 'red', fontWeight: 'bold' }}>  OVERDUE</span>}
              <br />
              {/* Editing and archiving only make sense on the active list */}
              {!showArchived && (
                <>
                  <button onClick={() => startEdit(task)}>Edit</button>
                  <button onClick={() => archiveTask(task.id)} style={{ marginLeft: '8px' }}>
                    Archive
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}