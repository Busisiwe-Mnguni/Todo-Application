# Todo-Application

A local-first todo application built with Next.js and SQLite. There are no
user accounts — the app is designed to be downloaded and run by a single
person on their own machine.

## Features

- Create, edit and archive tasks (archived tasks are never deleted — they
  remain viewable in a separate view).
- Each task has a Title, Description, Due Date and Topic.
- Each task has a status of `Todo`, `In-Progress`, or `Complete`.
- The task list can be sorted by Topic, Status, or Due Date.
- Overdue tasks (past their due date and not `Complete`) are visually
  flagged — overdue is not a selectable status, it's derived from the due
  date and current status.
- All data persists in a local SQLite file and survives a restart.

## Third-Party Code

| Package | Version | Why it was chosen |
|---|---|---|
| `next` | ^16.2.12 | Provides both the frontend (pages) and backend (API routes) in a single project, with a built-in dev server — no separate backend needed for a local-first app. |
| `react` | ^19.2.8 | Required by Next.js for building the UI. |
| `react-dom` | ^19.2.8 | Required by Next.js to render React components to the DOM. |
| `better-sqlite3` | ^9.6.0 | Synchronous, embedded SQLite driver — fits a single-user local app better than an async driver, since there's no concurrent-connection concern. Pinned to `9.6.0` specifically because later versions' prebuilt native bindings weren't compatible with the Node version used for development (see below); newer versions failed to install. |
| `jest` | (dev dependency) | Test runner used for the required unit/integration tests against the API routes and database logic. |

Install commands used:
```bash
npm install next react react-dom
npm install better-sqlite3@9.6.0
npm install --save-dev jest
```

## Database Design

The app uses a single SQLite table, `tasks`:

| Column | Type | Notes |
|---|---|---|
| `id` | `INTEGER PRIMARY KEY AUTOINCREMENT` | Unique task identifier. |
| `title` | `TEXT NOT NULL` | Task title. |
| `description` | `TEXT` | Optional task description. |
| `due_date` | `TEXT NOT NULL` | Stored as an ISO date string (`YYYY-MM-DD`). |
| `topic` | `TEXT NOT NULL` | Used for grouping/sorting. |
| `status` | `TEXT NOT NULL` | One of `Todo`, `In-Progress`, `Complete`. Fixed set, not user-editable. |
| `archived` | `INTEGER NOT NULL DEFAULT 0` | `0` = active, `1` = archived. Archiving flips this flag in place — rows are never moved or deleted. |

There is only one table and no foreign keys, since the app has a single
user and tasks have no related entities. `overdue` is **not** a stored
column — it's derived whenever tasks are displayed, by comparing `due_date`
against the current date and checking `status !== 'Complete'`, so it can
never drift out of sync with the data that defines it.

## Running It

**Node version used:** v20.9.0 (LTS). `better-sqlite3` compiles a native
binding at install time, so using a different major Node version may
require reinstalling it (`npm rebuild better-sqlite3` or a matching
version) — this is the reason the version is pinned above.

### 1. Clone and install

```bash
git clone https://github.com/Busisiwe-Mnguni/Todo-Application
cd Todo-Application
npm install
```

### 2. Run the app

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).
On first run, the SQLite database file is created automatically and the
`tasks` table is set up if it doesn't already exist.

### 3. Run the tests

```bash
npm test
```

This runs the Jest test suite. Tests use a separate, throwaway SQLite
database file (not the one used by `npm run dev`), so running tests never
touches or depends on your real task data.

### 4. Production build (optional)

```bash
npm run build
npm start
```

## AI Usage

Transcripts of AI-assisted planning, code generation and debugging for
this project are included in [`/ai-transcripts`](./ai-transcripts) (or
linked separately in the submission), per the lab requirements.