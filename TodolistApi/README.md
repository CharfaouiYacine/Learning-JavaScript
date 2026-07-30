# Todo List API

A simple REST API for managing a todo list, built with Node.js and Express.

## Features

- Create new Tasks
- Show Tasks 
- Update existing todos
- mark task as done/undone
- Delete tasks

## Tech Stack

- Node.js
- Express.js



## API Endpoints

| Method | Endpoint                   | Description           |
|--------|----------------------------|-----------------------|
| GET    | /todolist/tasks            | Get all todos         |
| POST   | /todolist/addtask          | Add a new task        |
| DELETE | /todolist/deletetask/:id   | Delete a task         |
| PATCH  | /todolist/markasdone/:id   | Mark a task as done   |
| PATCH  | /todolist/markasundone/:id | Mark a task as undone |
| DELETE | /todolist/modify/:id       | Modify a task         |

### Example Request

Creating a new task:

```json
POST /todos
Content-Type: application/json

{
  "task": "Learn Node.js",
}
```

### Example Response

```json
{
  "id": 1,
  "title": "Learn Node.js",
  "completed": false
}
```

## Project Structure

```
todolist api/
├── routes/
│   └── todotasks.js
├── controllers/
│   └── todolistFunctions.js
└── Todo_Api.js
```

